import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UserService {
  create(user: User) {
    return this.create(user);
  }

  findAll() {
    return this.findAll();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, user: User) {
    this.update(id , user);
    
  }

  remove(id: number) {
    return this.remove(id);
  }
}
