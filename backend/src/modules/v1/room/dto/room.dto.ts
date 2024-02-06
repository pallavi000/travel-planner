import { IsNumber, IsString } from 'class-validator';

export class roomDto {
  @IsNumber()
  roomNo: number;

  @IsString()
  type: string;

  @IsString()
  image: string;
}
