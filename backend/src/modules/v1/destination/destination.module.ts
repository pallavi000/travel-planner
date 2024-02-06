import { Module } from '@nestjs/common';
import { DestinationController } from './designation.controller';
import { DestinationService } from './destination.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinationModel } from './schema/destination.schema';

@Module({
  imports: [MongooseModule.forFeature([DestinationModel])],
  controllers: [DestinationController],
  providers: [DestinationService],
})
export class DestinationModule {}
