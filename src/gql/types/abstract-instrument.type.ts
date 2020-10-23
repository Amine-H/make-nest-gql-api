import { Field, ObjectType } from '@nestjs/graphql';
import { Instrument } from '../../interfaces/instrument.interface';
import { AbstractType } from './abstract.type';
import { CategoryType } from './category.type';

@ObjectType()
export abstract class AbstractInstrumentType<
  T extends Instrument
> extends AbstractType<T> {
  @Field()
  name: string;

  @Field()
  brand: string;

  @Field(() => CategoryType)
  category: CategoryType;

  @Field()
  price: number;
}