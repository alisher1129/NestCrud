import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  fatherName: string;

  @ManyToMany(() => Course, course => course.students)
  @JoinTable({ name: 'student_course' }) 
  courses: Course[]; 
}
