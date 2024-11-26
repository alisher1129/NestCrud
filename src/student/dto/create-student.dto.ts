import {
  IsNotEmpty,
  IsString,
  IsNumber,
  ArrayNotEmpty,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { CreateCourseDto } from './create-course.dto';
import { Type } from 'class-transformer';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  age: string;

  @IsNotEmpty()
  @IsString()
  fatherName: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCourseDto)
  courses?: CreateCourseDto[];
}
