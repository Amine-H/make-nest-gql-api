import { Field, ObjectType } from '@nestjs/graphql';
import { ElectricGuitar } from '../../interfaces/electric-guitar.interface';
import { AbstractInstrumentType } from './abstract-instrument.type';

@ObjectType()
export class ElectricGuitarType extends AbstractInstrumentType<ElectricGuitar> {
  @Field()
  numberOfStrings: number;

  @Field()
  numberOfFrets: number;

  @Field({ nullable: true })
  bridgePickup: string | null;

  @Field({ nullable: true })
  middlePickup: string | null;

  @Field({ nullable: true })
  neckPickup: string | null;
}
