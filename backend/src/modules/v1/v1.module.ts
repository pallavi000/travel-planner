import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DB_URL,
      }),
    }),
    UserModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class V1Module {}
