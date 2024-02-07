import { IsArray, IsString } from 'class-validator';
import { roomDto } from '../../room/dto/room.dto';

export class hotelDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsArray()
  room: [];

  @IsString()
  address: string;

  @IsString()
  detail: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  destination: string;
}
