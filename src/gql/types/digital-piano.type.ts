import { Field, ObjectType } from '@nestjs/graphql';
import { DigitalPiano } from '../../interfaces/digital-piano.interface';
import { AbstractInstrumentType } from './abstract-instrument.type';

@ObjectType({
  implements: [AbstractInstrumentType],
})
export class DigitalPianoType extends AbstractInstrumentType<DigitalPiano> {
  @Field()
  numberOfKeys: number;

  @Field({ nullable: true })
  keyAction: string | null;
}
