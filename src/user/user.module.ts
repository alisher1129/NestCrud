import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alisher1',
      password: '12345',
      database: 'NestCrud',
      entities: [User],
      synchronize: true,
    }),
  ]
})
export class UserModule {}
