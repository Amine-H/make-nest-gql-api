import { Field, ObjectType } from '@nestjs/graphql';
import { Instrument } from '../../interfaces/instrument.interface';
import { BaseType } from './base.type';

@ObjectType()
export class InstrumentType extends BaseType<Instrument> {
  @Field()
  name: string;
}
