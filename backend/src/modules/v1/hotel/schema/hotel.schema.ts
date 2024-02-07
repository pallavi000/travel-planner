import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Hotel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  detail: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }] })
  room: mongoose.Types.ObjectId[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
  })
  destination: mongoose.Types.ObjectId;
}

const HotelSchema = SchemaFactory.createForClass(Hotel);
export const HotelModel = {
  name: Hotel.name,
  schema: HotelSchema,
};
