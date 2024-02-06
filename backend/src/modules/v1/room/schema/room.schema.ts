import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Room {
  @Prop({ required: true })
  roomNo: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  image: string;
}

const RoomSchema = SchemaFactory.createForClass(Room);
export const RoomModel = { name: Room.name, schema: RoomSchema };
