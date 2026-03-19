import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const secret = configService.get<string | any>('JWT_SECRET');

    if (!secret) {
      throw new Error('JWT_ACCESS_SECRET is not defined');
    }

    const cookieExtractor = (req: Request) => {
      let token = null;
      if (req && req.cookies) {
        token = req.cookies['token'];
      }
      return token;
    };

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor,
      ]),
      secretOrKey: secret,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
