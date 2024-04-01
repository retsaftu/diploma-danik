import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() { username, password }: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.validateUser(username, password);
    const token = await this.authService.getJwtToken(user);
    const refreshToken = await this.authService.getRefreshToken(user._id);
    const secretData = {
      token,
      refreshToken,
    };
    console.log(`secretData`, secretData);
    res.cookie('auth-cookie', secretData, {
      httpOnly: true,
      // sameSite: 'none',
      // secure: true,
      // path: '/backend',
      expires: new Date(new Date().getTime() + 86409000),
    });
    return { message: 'success' };
  }
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    console.log(`dto`, dto);
    if (!dto.username || !dto.password || !dto.name) {
      return { message: 'missing fields' };
    }
    await this.authService.checkUsernameForUniqueness(dto.username);
    await this.authService.createUser(dto.name, dto.username, dto.password);
    return { message: 'success' };
  }

  @Get('refresh-tokens')
  @UseGuards(AuthGuard('refresh'))
  async regenerateTokens(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log(`refresh-tokens`);
    console.log(`req.user`, req.user);
    const token = await this.authService.getJwtToken(req.user);
    const refreshToken = await this.authService.getRefreshToken(
      req.user.userId,
    );
    const secretData = {
      token,
      refreshToken,
    };
    console.log('secretData');

    res.cookie('auth-cookie', secretData, {
      httpOnly: true,
      sameSite: 'none',
    });
    return { msg: 'success' };
  }

  @Get('check-cookie')
  @UseGuards(AuthGuard('checker'))
  async checkCookie() {
    return { valid: true };
  }
  @Get('logout')
  @UseGuards(AuthGuard('checker'))
  async logout(@Res({ passthrough: true }) res: Response) {
    res.cookie('auth-cookie', '', {
      httpOnly: true,
      expires: new Date(),
    });
    return { message: 'success' };
  }
}
