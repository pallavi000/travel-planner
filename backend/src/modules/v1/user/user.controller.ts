import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getUser() {
    try {
      const user = await this.userService.fetchAllUsers();
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Post('/')
  async createUser(@Body() body: any) {
    try {
      const user = await this.userService.createUser(body);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
