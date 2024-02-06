import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { roomDto } from './dto/room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('/')
  async fetchAllRooms() {
    try {
      const rooms = await this.roomService.findAllRoom();
      return rooms;
    } catch (error) {
      throw error;
    }
  }

  @Post('/')
  async createRoom(@Body() body: roomDto) {
    try {
      const room = await this.roomService.createRoom(body);
      return room;
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async findRoomById(@Param('id') roomId: string) {
    try {
      const room = await this.roomService.findRoomById(roomId);
      return room;
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updateRoomById(@Param('id') roomId: string, @Body() body: roomDto) {
    try {
      const room = await this.roomService.updateRoomById(roomId, body);
      return room;
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deleteRoomById(@Param('id') roomId: string) {
    try {
      const room = await this.roomService.deleteRoomById(roomId);
      return room;
    } catch (error) {
      throw error;
    }
  }
}
