import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DestinationService } from './destination.service';
import { destinationDto } from './dto/destination.dto';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get('/')
  async fetchAllDestinations() {
    try {
      const destinations = await this.destinationService.findAllDestinations();
      return destinations;
    } catch (error) {
      throw error;
    }
  }

  @Post('/')
  async createdestination(@Body() body: destinationDto) {
    try {
      const destination = await this.destinationService.createDestination(body);
      return destination;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async findDestinationById(@Param('id') destinationId: string) {
    try {
      const destination =
        await this.destinationService.findDestinationById(destinationId);
      return destination;
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updateDestinationById(
    @Param('id') destinationId: string,
    @Body() body: destinationDto,
  ) {
    try {
      const destination = await this.destinationService.updateDestinationById(
        destinationId,
        body,
      );
      return destination;
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deleteDestinationById(@Param('id') destinationId: string) {
    try {
      const destination =
        await this.destinationService.deleteDestinationById(destinationId);
      return destination;
    } catch (error) {
      throw error;
    }
  }

  @Get(':name')
  async findDestinationByName(@Param('name') name: string) {
    try {
      const destinations =
        await this.destinationService.findDestinationByName(name);
      return destinations;
    } catch (error) {
      throw error;
    }
  }
}
