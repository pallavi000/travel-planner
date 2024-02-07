import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IExpressRequest } from 'src/types/auth';

import { UserService } from '../user/user.service';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/register')
  async register(@Body() body: registerDto) {
    try {
      const hashPassword = await this.userService.generateHash(body.password);
      const user = await this.userService.createUser({
        ...body,
        password: hashPassword,
      });

      const { password, ...payload } = user;
      const token = this.authService.generateToken(payload);
      return { token, user: payload };
    } catch (error) {
      throw error;
    }
  }

  @Post('/login')
  async login(@Body() body: loginDto) {
    try {
      const user = await this.userService.findUserByEmail(body.email);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const validUser = await this.authService.compareHashedPassword(
        body.password,
        user.password,
      );
      if (!validUser) {
        throw new BadRequestException('Invalid Password');
      }
      const { password, ...payload } = user;
      const token = this.authService.generateToken(payload);
      return { token, user: payload };
    } catch (error) {
      throw error;
    }
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async getProfile(@Req() req: IExpressRequest) {
    try {
      const user = await this.userService.getUserById(req.user._id);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
