import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './config/database.module';
import { CompanyModule } from './company/company.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [DatabaseModule, UserModule, CompanyModule, StudentModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
