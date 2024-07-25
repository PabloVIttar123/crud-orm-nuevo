import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {

  @IsString()
  pais: string;

  @IsString()
  provincia: string;

  @IsString()
  localidad: string;

  @IsString()
  direccion: string;
}
