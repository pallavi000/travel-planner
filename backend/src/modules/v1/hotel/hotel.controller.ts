import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { hotelDto } from './dto/hotel.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('/')
  async fetchAllHotels() {
    try {
      const hotels = await this.hotelService.findAllHotels();
      return hotels;
    } catch (error) {
      throw error;
    }
  }

  @Post('/')
  async createHotel(@Body() body: hotelDto) {
    try {
      const hotel = await this.hotelService.createHotel(body);
      return hotel;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async findHotelById(@Param('id') hotelId: string) {
    try {
      const hotel = await this.hotelService.findHotelById(hotelId);
      return hotel;
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updateHotelById(@Param('id') hotelId: string, @Body() body: hotelDto) {
    try {
      const hotel = await this.hotelService.updateHotelById(hotelId, body);
      return hotel;
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deleteHotelById(@Param('id') hotelId: string) {
    try {
      const hotel = await this.hotelService.deleteHotelById(hotelId);
      return hotel;
    } catch (error) {
      throw error;
    }
  }
}
