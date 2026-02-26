import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user?.passwordHash);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');
    // console.log('userid', user.id, 'user emial', user.email);
    const tokens = await this.generateTokens(user.id, user.email);
    console.log('tokens', tokens);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async register(registerDto) {
    this.usersService.register(registerDto);
  }
  async generateTokens(userId: string, email: string) {
    const payload = { sub: userId, email };
    const refreshSecret = this.configService.get<string>('JWT_REFRESH_SECRET');
    const refreshExp = this.configService.get<string>('JWT_REFRESH_EXP');

    if (!refreshSecret) {
      throw new Error('JWT_REFRESH_SECRET not set');
    }

    if (!refreshExp) {
      throw new Error('JWT_REFRESH_EXP not set');
    }
    const accessToken = await this.jwtService.signAsync(payload);

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: refreshSecret,
      expiresIn: refreshExp as any, // force type
    });

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hash = await bcrypt.hash(refreshToken, 10);
    await this.usersService.updateRefreshToken(userId, hash);
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);

    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedException();
    }

    const match = await bcrypt.compare(refreshToken, user.refreshTokenHash);

    if (!match) throw new UnauthorizedException();

    const tokens = await this.generateTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: string) {
    await this.usersService.clearRefreshToken(userId);
  }
}
