import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelModel } from './schema/hotel.schema';

@Module({
  imports: [MongooseModule.forFeature([HotelModel])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
