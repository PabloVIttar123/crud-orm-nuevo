import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { Role } from 'src/roles/entities/role.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsString()
  apellido: string;
  @ApiProperty()
  @IsString()
  edad: string;
  @ApiProperty()
  @IsUUID()
  role: Role;
  @ApiProperty()
  @IsString()
  direccion: number;
}
