import { Field, ObjectType } from '@nestjs/graphql';
import { BassGuitar } from 'src/interfaces/bass-guitar.interface';
import { AbstractInstrumentType } from './abstract-instrument.type';

@ObjectType()
export class BassGuitarType extends AbstractInstrumentType<BassGuitar> {
  @Field()
  numberOfStrings: number;

  @Field()
  scaleLength: number;

  @Field({ nullable: true })
  bridgePickup: string | null;

  @Field({ nullable: true })
  middlePickup: string | null;

  @Field({ nullable: true })
  neckPickup: string | null;
}
