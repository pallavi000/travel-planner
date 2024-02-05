import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async fetchAllUsers() {
    const users = await this.userModel.find();
    return users;
  }

  async createUser(body) {
    const user = await this.userModel.create({
      ...body,
    });
    return user;
  }
}
