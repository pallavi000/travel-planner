import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from './schema/hotel.schema';
import { Model } from 'mongoose';
import { hotelDto } from './dto/hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name) private readonly hotelModel: Model<Hotel>,
  ) {}

  async findAllHotels() {
    const hotels = await this.hotelModel.find().populate('room');
    return hotels;
  }

  async createHotel(body: hotelDto) {
    const hotel = await this.hotelModel.create({ ...body });
    return hotel;
  }

  async findHotelById(id: string) {
    const hotel = await this.hotelModel.findById(id).populate('room');
    return hotel;
  }

  async updateHotelById(id: string, body: hotelDto) {
    const hotel = await this.hotelModel.findByIdAndUpdate(id, { ...body });
    return hotel;
  }

  async deleteHotelById(id: string) {
    const hotel = await this.hotelModel.findByIdAndDelete(id);
    return hotel;
  }

  async findHotelsByDestinationId(id: string) {
    const hotels = await this.hotelModel.find({ destination: id });
    return hotels;
  }

  async findHotelByName(name: string) {
    const hotels = await this.hotelModel.find({
      title: { $regex: name, $options: 'i' },
    });
    return hotels;
  }
}
