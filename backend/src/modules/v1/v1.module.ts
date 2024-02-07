import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModule } from './room/room.module';
import { HotelModule } from './hotel/hotel.module';
import { DestinationModule } from './destination/destination.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DB_URL,
      }),
    }),
    UserModule,
    RoomModule,
    HotelModule,
    DestinationModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class V1Module {}
