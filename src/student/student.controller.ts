import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { Course } from './entities/course.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('create')
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Put(':id')
  updateStudent(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.updateStudent(id, updateStudentDto);
  }

  @Get()
  findAllStudents() {
    return this.studentService.findAllStudents();
  }

  @Get(':id')
  findStudentById(@Param('id') id: number) {
    return this.studentService.findStudentById(id);
  }



  @Delete(':id')
  removeStudent(@Param('id') id: number) {
    return this.studentService.removeStudent(id);
  }

  
}
