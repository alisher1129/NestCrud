import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alisher1',
      password: '12345',
      database: 'NestCrud',
      entities: [User],
      synchronize: true,
    }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
