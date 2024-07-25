import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find({
      relations: { role: true, location: true },
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id: id }, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.softDelete({ id: id });
  }
}
