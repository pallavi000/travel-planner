import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './schema/room.schema';
import { Model } from 'mongoose';
import { roomDto } from './dto/room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>,
  ) {}

  async findAllRoom() {
    const rooms = await this.roomModel.find();
    return rooms;
  }

  async createRoom(body: roomDto) {
    const room = await this.roomModel.create({ ...body });
    return room;
  }

  async findRoomById(id: string) {
    const room = await this.roomModel.findById(id);
    return room;
  }

  async updateRoomById(id: string, body: roomDto) {
    const room = await this.roomModel.findByIdAndUpdate(id, { ...body });
    return room;
  }

  async deleteRoomById(id: string) {
    const room = await this.roomModel.findByIdAndDelete(id);
    return room;
  }
}
