import { Query, Resolver } from '@nestjs/graphql';
import { fenderGuitar, fenderBass, rolandPiano } from '../../mocks';
import { AnyInstrumentType } from '../types/any-instrument.type';
import { BassGuitarType } from '../types/bass-guitar.type';
import { DigitalPianoType } from '../types/digital-piano.type';
import { ElectricGuitarType } from '../types/electric-guitar.type';

@Resolver(() => AnyInstrumentType)
export class InstrumentResolver {
  @Query(() => [AnyInstrumentType])
  async instruments(): Promise<typeof AnyInstrumentType[]> {
    return [
      new ElectricGuitarType(fenderGuitar),
      new BassGuitarType(fenderBass),
      new DigitalPianoType(rolandPiano),
    ];
  }
}
