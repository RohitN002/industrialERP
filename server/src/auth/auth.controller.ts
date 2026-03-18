import { Controller, Post, Body, UseGuards, Req, Res,} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtRefreshGuard } from './guards/refresh.guard';
import type { Response } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

   @Post('login')
  async login(
    @Body() body: any,
    @Res({ passthrough: true }) res: Response
  ) {
    const token = await this.authService.login(body.email, body.password);

    res.cookie('refreshToken', token?.tokens?.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/auth/refresh',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.cookie('userId', token?.userId, {
  httpOnly: true, // optional (depends if frontend needs access)
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    return {
      role: token?.role,
      accessToken: token?.tokens?.accessToken,
      message: token?.message,
    };
  }
  @Post('/register')
  register(@Body() body: any) {
    const registerDto = body;
    return this.authService.register(registerDto);
  }
  // @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  refresh(@Req() req: any) {
     const refreshToken = req.cookies?.refreshToken;
     const userId = req.cookies?.userId;
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Post('logout')
  logout(@Body('userId') userId: string) {
    return this.authService.logout(userId);
  }
}
