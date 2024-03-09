import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]), // 导入 TypeORM 模块并指定了 Lesson 实体
    StudentModule, // 导入了 StudentModule 模块
  ],
  providers: [
    LessonResolver, // 提供了 LessonResolver 服务
    LessonService // 提供了 LessonService 服务
  ]
})
export class LessonModule {}
