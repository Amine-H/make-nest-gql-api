import { Instrument } from './instrument.interface';

export interface DigitalPiano extends Instrument {
  numberOfKeys: number;
  keyAction: string | null;
}
