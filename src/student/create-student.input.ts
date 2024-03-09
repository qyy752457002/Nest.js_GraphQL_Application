import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

/*

这段代码看起来是使用TypeScript语言编写的，同时使用了GraphQL和类装饰器（decorators）。

让我逐步解释代码：

1. `@InputType()`: 这是一个装饰器，用于指示下面的类是一个GraphQL的Input类型。
                   在GraphQL中，Input类型用于定义输入参数的结构，比如在创建、更新等操作中需要提供的数据结构。

2. `export class CreateStudentInput { ... }`: 这是一个导出的类，名为`CreateStudentInput`，用于定义创建学生的输入类型。

3. `@MinLength(1)`: 这是一个装饰器，它应该是从某个库（可能是class-validator）中引入的。它用于指示下面的属性的最小长度为1。
                    换句话说，在GraphQL中，`firstName`和`lastName`的值必须至少包含一个字符。

4. `@Field()`: 这也是一个装饰器，用于指示下面的属性是GraphQL字段。
               在GraphQL中，字段是可以查询和变异的数据单元。
               在这种情况下，`firstName`和`lastName`被指定为GraphQL字段，因此它们可以在GraphQL查询中被访问和操作。

5. `firstName: string;` 和 `lastName: string;`: 这两个属性定义了学生的名字和姓氏，它们都是字符串类型。

综上所述，这段代码定义了一个GraphQL的输入类型`CreateStudentInput`，用于在创建学生时接收学生的名字和姓氏。
这两个属性都必须至少包含一个字符，并且可以在GraphQL查询中访问和使用。

*/

@InputType()
export class CreateStudentInput {
  @MinLength(1)
  @Field()
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;
}