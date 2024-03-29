import { IsArray, IsString, isString } from 'class-validator';
export class destinationDto {
  @IsString()
  name: string;

  @IsString()
  days: string;

  @IsString()
  location: string;

  @IsString()
  detail: string;

  @IsArray()
  hotels: string[];

  @IsString()
  image: string;
}
