import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Destination } from './schema/destination.schema';
import { Model } from 'mongoose';
import { destinationDto } from './dto/destination.dto';

@Injectable()
export class DestinationService {
  constructor(
    @InjectModel(Destination.name)
    private readonly destinationModel: Model<Destination>,
  ) {}

  async findAllDestinations() {
    const destinations = await this.destinationModel.find().populate('room');
    return destinations;
  }

  async createDestination(body: destinationDto) {
    const destination = await this.destinationModel.create({ ...body });
    return destination;
  }

  async findDestinationById(id: string) {
    const destination = await this.destinationModel
      .findById(id)
      .populate('room');
    return destination;
  }

  async updateDestinationById(id: string, body: destinationDto) {
    const destination = await this.destinationModel.findByIdAndUpdate(id, {
      ...body,
    });
    return destination;
  }

  async deleteDestinationById(id: string) {
    const destination = await this.destinationModel.findByIdAndDelete(id);
    return destination;
  }
}
