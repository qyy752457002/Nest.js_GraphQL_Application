import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';
import { Student } from './student/student.entity';
import { StudentModule } from './student/student.module';

/*
  总之，AppModule 是 NestJS 应用的主模块，它导入了 TypeORM 模块用于数据库操作，
  GraphQL 模块用于 GraphQL API 的构建，以及其他自定义模块 LessonModule 和 StudentModule。
  
  这些模块的导入使得应用能够在运行时具备数据库访问能力、GraphQL API 和其他自定义功能。
*/

// 这是一个装饰器，用于将类标记为 NestJS 模块
@Module({
  // 这是一个装饰器选项，用于声明当前模块所依赖的其他模块
  imports: [
    // 这是 TypeORM 模块的初始化设置，用于配置数据库连接。
    // 在这里，配置了连接到一个 MongoDB 数据库的相关信息，包括 MongoDB 的连接 URL、数据同步选项、使用统一的拓扑结构等
    TypeOrmModule.forRoot({
      // 表明使用 MongoDB 数据库
      type: 'mongodb',
      // MongoDB 数据库的连接 URL
      url: 'mongodb+srv://Krismile:Qyy2614102@todolistcluster.dalyaca.mongodb.net/school',
      // 表示在应用启动时自动创建数据库结构，这在开发环境中很方便，但在生产环境中应该谨慎使用
      synchronize: true,
      // 表示使用 MongoDB 的统一拓扑结构
      useUnifiedTopology: true,
      // 声明了数据库实体类，即数据库中的表或集合
      entities: [
        Lesson,
        Student
      ]
    }),
    // 这是 GraphQL 模块的初始化设置，用于配置 GraphQL 服务
    GraphQLModule.forRoot({
      // 表示在应用启动时自动生成 GraphQL Schema 文件
      autoSchemaFile: true
    }),
    // 是另一个模块，它提供了与课程相关的功能和路由
    LessonModule,
    // 这是另一个模块，它提供了与学生相关的功能和路由
    StudentModule
  ],
})

export class AppModule {}
