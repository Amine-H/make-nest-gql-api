import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { Instrument } from '../../interfaces/instrument.interface';
import { AbstractType } from './abstract.type';
import { CategoryType } from './category.type';

@InterfaceType()
export abstract class AbstractInstrumentType<
  T extends Instrument
  > extends AbstractType<T> {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  brand: string;

  @Field(() => CategoryType)
  category: CategoryType;

  @Field()
  price: number;
}
