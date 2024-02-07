import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from './schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService, JwtService],
  exports: [UserModule, UserService],
})
export class UserModule {}
