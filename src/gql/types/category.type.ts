import { Field, ObjectType } from '@nestjs/graphql';
import { Category, CategoryName } from '../../interfaces/category.interface';
import { AbstractType } from './abstract.type';

@ObjectType()
export class CategoryType extends AbstractType<Category> {
  @Field()
  name: CategoryName;
}
