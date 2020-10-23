import { ElectricGuitar } from '../interfaces/electric-guitar.interface';
import { CategoryName } from '../interfaces/category.interface';
import { BassGuitar } from 'src/interfaces/bass-guitar.interface';
import { DigitalPiano } from 'src/interfaces/digital-piano.interface';

export const fenderGuitar: ElectricGuitar = {
  id: 'ea2a6956-1528-4a35-97de-ea0606857c1f',
  name: 'Fender American Professional II Stratocaster',
  brand: 'Fender',
  category: {
    name: CategoryName.ELECTRIC_GUITAR,
  },
  price: 1549,
  numberOfFrets: 22,
  numberOfStrings: 6,
  bridgePickup: 'V-Mod II Single-Coil Strat',
  middlePickup: 'V-Mod II Single-Coil Strat',
  neckPickup: 'V-Mod II Single-Coil Strat',
};

export const lesPaulGuitar: ElectricGuitar = {
  id: '5def43e8-b653-42ce-9aa5-051b0396f15b',
  name: 'Les Paul Standard',
  brand: 'Gibson',
  category: {
    name: CategoryName.ELECTRIC_GUITAR,
  },
  price: 2199,
  numberOfFrets: 24,
  numberOfStrings: 6,
  bridgePickup: 'Burstbucker 2',
  middlePickup: null,
  neckPickup: 'Burstbucker 1',
};

export const fenderBass: BassGuitar = {
  id: '6c52a4e8-0555-498c-aed8-bf60319482f3',
  name: 'Fender Professional P Bass',
  brand: 'Fender',
  category: {
    name: CategoryName.BASS_GUITAR,
  },
  price: 1399,
  scaleLength: 34,
  numberOfStrings: 5,
  bridgePickup: null,
  middlePickup: 'V-Mod Split Single-Coil',
  neckPickup: null,
};

export const rolandPiano: DigitalPiano = {
  id: 'f0e0ecd6-e53d-49e5-b8c3-9bcee01d7175',
  name: 'Roland FP30',
  brand: 'Roland',
  category: {
    name: CategoryName.DIGITAL_PIANO,
  },
  price: 1399,
  numberOfKeys: 99,
  keyAction: 'Hammer',
};
