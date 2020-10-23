import { Instrument } from './instrument.interface';

export interface BassGuitar extends Instrument {
  numberOfStrings: number;
  scaleLength: number;
  bridgePickup: string | null;
  middlePickup: string | null;
  neckPickup: string | null;
}
