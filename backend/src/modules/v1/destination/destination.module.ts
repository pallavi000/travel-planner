import { Module } from '@nestjs/common';
import { DestinationController } from './designation.controller';
import { DestinationService } from './destination.service';

@Module({
  imports: [],
  controllers: [DestinationController],
  providers: [DestinationService],
})
export class DestinationModule {}
