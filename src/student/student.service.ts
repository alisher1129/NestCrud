import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Course } from './entities/course.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  // // Student CRUD
  // createStudent(studentData: CreateStudentDto) {
  //   let { name, age, fatherName, courses } = studentData;
  //   let course = new Course();
  //   course.name = 'math';
  //   course.description = 'this is math ';
  //   course.courseCode = 'ab12';

  //   let student = new Student();
  //   student.name = 'name';
  //   student.age = ' 12';
  //   student.fatherName = 'fatherName';
  //   student.courses = [course];

  //   // course.students = [student];
  //   // const student = this.studentRepository.create(studentData);
  //   // this.studentRepository.save(course);
  //   return this.studentRepository.save(student);
  //   // return this.courseRepository.save(course);
  // }


  async createCourses(courseData: CreateCourseDto[]) {
    const courses = courseData.map((courseDto) => {
      const course = this.courseRepository.create(courseDto);
      return course;
    });

    return await this.courseRepository.save(courses);
  }

  async createStudent(studentData: CreateStudentDto) {
    const { name, age, fatherName, courses } = studentData;

    const createdCourses = await this.createCourses(courses);

    const student = this.studentRepository.create({
      name,
      age,
      fatherName,
      courses: createdCourses,
    });

    return await this.studentRepository.save(student);
  }

  findAllStudents() {
    return this.studentRepository.find({ relations: ['courses'] });
  }

  findStudentById(id: number) {
    return this.studentRepository.findOne({
      where: { id },
      relations: ['courses'],
    });
  }

  async updateStudent(id: number, updateData: Partial<Student>) {
    await this.studentRepository.update(id, updateData);
    return this.findStudentById(id);
  }

  async removeStudent(id: number) {
    const student = await this.findStudentById(id);
    await this.studentRepository.remove(student);
    return student;
  }

}
