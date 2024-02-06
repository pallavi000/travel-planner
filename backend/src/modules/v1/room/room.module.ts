import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModel } from './schema/room.schema';

@Module({
  imports: [MongooseModule.forFeature([RoomModel])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
