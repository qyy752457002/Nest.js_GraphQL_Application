import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';

/*

这段代码是一个 TypeScript 中的 NestJS 框架的模块定义。让我们逐行解释它：

1. `@Module({})`: 这是 NestJS 中用于定义模块的装饰器。
                  装饰器是一种特殊类型的声明，它会修改类的行为或添加元数据。`@Module()` 装饰器用于将类标记为 NestJS 模块。

2. `imports`: 这是一个模块导入的属性。它指定了当前模块所依赖的其他模块。

              在这个例子中，`TypeOrmModule.forFeature([Student])` 导入了一个名为 `TypeOrmModule` 的模块，
              并且使用了 `forFeature()` 方法来导入了一个名为 `Student` 的实体。

              这意味着 `Student` 实体将被用于 TypeORM 数据库的操作。

3. `providers`: 这是一个提供者数组，它包含了模块中的服务提供者。
                在这里，`StudentResolver` 和 `StudentService` 被提供给了当前模块。

4. `exports`: 这是一个导出的数组，它包含了当前模块中需要导出的提供者。
              在这里，`StudentService` 被导出，这意味着其他模块可以通过导入 `StudentModule` 来访问 `StudentService`。

5. `export class StudentModule {}`: 这是一个 TypeScript 类的定义，它被导出为 `StudentModule`。
                                    这个类包含了模块的配置信息，如导入、提供者和导出。

总的来说，这段代码定义了一个 NestJS 模块，名为 `StudentModule`，它依赖于 `TypeOrmModule`，
提供了 `StudentResolver` 和 `StudentService`，并且允许其他模块访问 `StudentService`。

*/

@Module({
  imports: [
    // `Student` 实体将被用于 TypeORM 数据库的操作
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentResolver, StudentService],
  exports: [StudentService]
})
export class StudentModule {}
