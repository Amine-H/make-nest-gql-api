import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class AbstractType<T> {
  @Field(() => ID)
  id: string;

  constructor(data: T) {
    Object.assign(this, data);
  }
}
