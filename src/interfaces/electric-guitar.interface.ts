import { Instrument } from './instrument.interface';

export interface ElectricGuitar extends Instrument {
  numberOfStrings: number;
  numberOfFrets: number;
  bridgePickup: string | null;
  middlePickup: string | null;
  neckPickup: string | null;
}
