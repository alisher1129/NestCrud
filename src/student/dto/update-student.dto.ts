import { IsOptional, IsString, IsNumber, IsArray } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  age?: string;

  @IsOptional()
  @IsString()
  fatherName?: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true }) // Ensure each course ID is a number
  courseIds?: number[];
}
