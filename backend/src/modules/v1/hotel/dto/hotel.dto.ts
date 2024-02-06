import { IsString } from 'class-validator';

export class hotelDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  room: string;

  @IsString()
  address: string;

  @IsString()
  detail: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;
}
