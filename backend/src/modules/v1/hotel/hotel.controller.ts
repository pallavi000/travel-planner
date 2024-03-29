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
import { ApiError } from 'src/exceptions/api-error.exception';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('/')
  async fetchAllHotels() {
    try {
      const hotels = await this.hotelService.findAllHotels();
      return hotels;
    } catch (error) {
      throw new ApiError(error);
    }
  }

  @Post('/')
  async createHotel(@Body() body: hotelDto) {
    try {
      const hotel = await this.hotelService.createHotel(body);
      return hotel;
    } catch (error) {
      throw new ApiError(error);
    }
  }

  @Get('/:id')
  async findHotelById(@Param('id') hotelId: string) {
    try {
      const hotel = await this.hotelService.findHotelById(hotelId);
      return hotel;
    } catch (error) {
      throw new ApiError(error);
    }
  }

  @Put('/:id')
  async updateHotelById(@Param('id') hotelId: string, @Body() body: hotelDto) {
    try {
      const hotel = await this.hotelService.updateHotelById(hotelId, body);
      return hotel;
    } catch (error) {
      throw new ApiError(error);
    }
  }

  @Delete('/:id')
  async deleteHotelById(@Param('id') hotelId: string) {
    try {
      const hotel = await this.hotelService.deleteHotelById(hotelId);
      return hotel;
    } catch (error) {
      throw new ApiError(error);
    }
  }

  @Get('/destination/:id')
  async fetchHotelsByDestinationId(@Param('id') destinationId: string) {
    try {
      const hotels =
        await this.hotelService.findHotelsByDestinationId(destinationId);
      return hotels;
    } catch (error) {
      throw new ApiError(error);
    }
  }

  @Get(':title')
  async searchHotelByName(@Param('name') name: string) {
    try {
      const hotels = await this.hotelService.findHotelByName(name);
      return hotels;
    } catch (error) {
      throw new ApiError(error);
    }
  }
}
