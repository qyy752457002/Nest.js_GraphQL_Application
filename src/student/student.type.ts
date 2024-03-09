import { ObjectType, Field } from '@nestjs/graphql';

/*
  总之，`StudentType` 类定义了一个 GraphQL 对象类型，用于表示学生对象，其中包含 `id`、`firstName` 和 `lastName` 三个字段。
  这样，当在 GraphQL 查询中请求学生对象时，可以返回这些字段的值。
*/


// 这是一个装饰器，用于将 `StudentType` 类标记为一个 GraphQL 对象类型，它告诉 GraphQL 框架该类代表一个特定的对象类型，这里是学生对象类型，并将其命名为 `'Student'`。
@ObjectType('Student')
// 这是一个 TypeScript 类的定义，代表一个学生对象的类型。
export class StudentType {

  /*
    这是另一个装饰器，用于将类的属性标记为 GraphQL 中的字段。

    在这个类中，`id`、`firstName` 和 `lastName` 被标记为字段，意味着当 GraphQL 查询请求包含这些字段时，
    GraphQL 框架会解析并返回这些字段的值。
  */
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}