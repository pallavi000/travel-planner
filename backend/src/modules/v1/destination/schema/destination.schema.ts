import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { SchemaType } from 'mongoose';

@Schema()
export class Destination {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  detail: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  days: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }] })
  hotel: mongoose.Types.ObjectId[];
}

const DestinationSchema = SchemaFactory.createForClass(Destination);
export const DestinationModel = {
  name: Destination.name,
  schema: DestinationSchema,
};
