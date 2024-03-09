import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  /*
    @IsUUID("4", { each: true }): 这是一个使用了 class-validator 库提供的装饰器 @IsUUID，用于验证一个属性的值是否符合 UUID v4 的格式。
    在这里， { each: true } 表示该验证器会应用在数组的每个元素上，而不是整个数组。
    这意味着它会检查数组中的每个字符串元素是否符合 UUID v4 的格式。
  */
  @IsUUID("4", { each: true })

  /*
    @Field(() => [ID], { defaultValue: [] }): 这是 GraphQL 中的字段装饰器 @Field，用于指定一个字段是 GraphQL 查询中的一个可选字段。
    在这里，() => [ID] 指定了这个字段的类型为 ID 类型的数组。
    { defaultValue: [] } 表示如果没有提供该字段的值，它将默认为空数组。
  */

  /*
    直接使用 @Field() 可以使代码更加简洁，让 GraphQL 自动推断字段的类型。
    而使用 @Field() 并提供明确的类型信息可以使代码更加清晰，尤其是在需要指定特定类型或提供其他元数据时。
    选择哪种方式取决于个人偏好以及代码的需求。
  */
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}