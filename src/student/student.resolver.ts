import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

/*

这段代码是一个 NestJS 中的 Resolver 类的定义，它用于处理 GraphQL 查询和变更请求。

总的来说，这段代码定义了一个 GraphQL Resolver 类 StudentResolver，它处理了查询单个学生信息、查询所有学生信息和创建新学生信息的请求，这些请求都依赖于一个 StudentService 服务。

*/

/*
  这是一个装饰器，它将类标记为一个 GraphQL Resolver，并且指定了 Resolver 处理的对象类型为 StudentType。
  StudentType 可能是一个 GraphQL 类型的定义，用于描述学生的数据结构。
*/
@Resolver(of => StudentType)
export class StudentResolver {
  
  /*
    这是类的构造函数，它接收一个参数 studentService，它是一个 StudentService 类型的实例。
    在构造函数中，studentService 被注入到 StudentResolver 类中，以便在 Resolver 中使用。
  */
  constructor(
    private studentService: StudentService,
  ) {}

  /*
    这是一个装饰器，它将 student() 方法标记为一个 GraphQL 查询。
    returns => StudentType 指定了查询返回的数据类型为 StudentType。
  */
  @Query(returns => StudentType)
  /*
    这是一个用于查询单个学生信息的方法。
    @Args('id') 装饰器指定了 GraphQL 查询中的参数名为 'id'，该参数是一个字符串类型的学生 ID。
    方法调用了 studentService 的 getStudent(id) 方法来获取特定 ID 的学生信息。
  */
  async student(
    @Args('id') id: string,
  ) {
    return this.studentService.getStudent(id);
  }

  /*
    这是一个装饰器，它将 students() 方法标记为一个 GraphQL 查询。
    returns => [StudentType] 指定了查询返回的数据类型为 StudentType 的数组。
  */
  @Query(returns => [StudentType])
  /*
    这是一个用于查询所有学生信息的方法。
    调用了 studentService 的 getStudents() 方法来获取所有学生的信息。
  */
  async students() {
    return this.studentService.getStudents();
  }

  /*
    这是一个装饰器，它将 createStudent() 方法标记为一个 GraphQL 变更操作。
    returns => StudentType 指定了变更操作返回的数据类型为 StudentType。
  */
  @Mutation(returns => StudentType)
  
  /*
  这是一个用于创建新学生信息的方法。

    @Args('createStudentInput') 装饰器指定了 GraphQL 变更操作中的参数名为 'createStudentInput'，
    参数类型为 CreateStudentInput，它可能是一个用于创建学生的输入对象。

    方法调用了 studentService 的 createStudent(createStudentInput) 方法来创建新的学生信息。
  */
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}