import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

// @Injectable() 装饰器用于将该类标记为一个可注入的服务，表示它可以在其他组件或服务中被注入使用。
@Injectable()
export class StudentService {
  /*
    @InjectRepository(Student) 装饰器是来自 TypeORM 的，它将 Student 实体类注入到 StudentService 中，使得在 StudentService 中可以直接操作 Student 实体的数据库表。

    private studentRepository: Repository<Student> 是一个私有成员变量，它是 TypeORM 中用于操作实体的通用仓库，这里它用于操作 Student 实体的数据。
  */
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>, 
  ) {}
  
  // getStudent(id: string): Promise<Student> 方法用于根据学生的 ID 获取单个学生的信息。
  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  // getStudents(): Promise<Student[]> 方法用于获取所有学生的信息。
  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  /*
    createStudent(createStudentInput: CreateStudentInput): Promise<Student> 方法用于创建一个新的学生记录。
    它接收一个 CreateStudentInput 对象作为参数，其中包含要创建的学生的信息，如姓和名。
    在方法中，使用 this.studentRepository.create() 创建一个新的学生对象，然后使用 this.studentRepository.save() 将其保存到数据库中。
  */
  async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName
    });

    return this.studentRepository.save(student);
  }

  /*
    getManyStudents(studentIds: string[]): Promise<Student[]> 方法用于获取多个学生的信息，
    它接收一个学生 ID 数组作为参数，然后使用 $in 条件在数据库中查找匹配这些 ID 的学生记录。
  */
  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        }
      }
    });
  }
}
