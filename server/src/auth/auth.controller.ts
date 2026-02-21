import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtRefreshGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }
  @Post('register')
  register(@Body() registerDto) {
    return this.authService.register(registerDto);
  }
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  refresh(@Req() req: any) {
    return this.authService.refreshTokens(req.user.sub, req.user.refreshToken);
  }

  @Post('logout')
  logout(@Body('userId') userId: string) {
    return this.authService.logout(userId);
  }
}
