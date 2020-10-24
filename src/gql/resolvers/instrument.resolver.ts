import { Query, Resolver } from '@nestjs/graphql';
import { fenderGuitar, fenderBass, rolandPiano } from '../../mocks';
import { AbstractInstrumentType } from '../types/abstract-instrument.type';
import { BassGuitarType } from '../types/bass-guitar.type';
import { DigitalPianoType } from '../types/digital-piano.type';
import { ElectricGuitarType } from '../types/electric-guitar.type';

@Resolver(() => AbstractInstrumentType)
export class InstrumentResolver {
  @Query(() => [AbstractInstrumentType])
  async instruments(): Promise<AbstractInstrumentType<any>[]> {
    return [
      new ElectricGuitarType(fenderGuitar),
      new BassGuitarType(fenderBass),
      new DigitalPianoType(rolandPiano),
    ];
  }
}
