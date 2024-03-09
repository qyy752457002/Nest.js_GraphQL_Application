import { Entity, ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

/*

这段代码看起来是使用了TypeORM库，它是一个用于在Node.js和TypeScript中操作关系型数据库的ORM（对象关系映射）工具。

让我们逐行解释这段代码：

- `@Entity()`: 这个装饰器用于将类声明为一个实体，表示它将映射到数据库中的一个表。
               在这里，`Student` 类被声明为一个实体，将被映射到数据库中的一个表。

- `export class Student { ... }`: 这定义了一个名为 `Student` 的 TypeScript 类，它代表了数据库中的一个实体，即学生。

- `@ObjectIdColumn() _id: string;`: 这表示 `_id` 是一个ObjectId列，通常用于MongoDB数据库中的主键。
                                    它是一个自动生成的唯一标识符，用于唯一标识数据库中的每个文档。

- `@PrimaryColumn() id: string;`: 这声明了一个名为 `id` 的主键列，它是学生表的主键。
                                  在数据库中，它可能用于快速检索和定位特定的学生记录。

- `@Column() firstName: string;` 和 `@Column() lastName: string;`: 这两行声明了两个普通的列，分别用于存储学生的名字和姓氏。

总体来说，这段代码定义了一个 `Student` 类，它代表了数据库中的一个学生实体。
这个实体包含了几个列，包括一个用于MongoDB的ObjectId主键列 `_id`，一个用于主键的 `id` 列，以及用于存储学生名字和姓氏的普通列 `firstName` 和 `lastName`。

*/

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}