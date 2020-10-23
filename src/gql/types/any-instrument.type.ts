import { createUnionType } from '@nestjs/graphql';
import { BassGuitarType } from './bass-guitar.type';
import { DigitalPianoType } from './digital-piano.type';
import { ElectricGuitarType } from './electric-guitar.type';

export const AnyInstrumentType = createUnionType({
  name: 'AnyInstrumentType',
  types: () => [ElectricGuitarType, BassGuitarType, DigitalPianoType],
});
