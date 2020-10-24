import { Injectable } from "@nestjs/common";
import { BassGuitar } from "../interfaces/bass-guitar.interface";
import { CategoryName } from "../interfaces/category.interface";
import { DigitalPiano } from "../interfaces/digital-piano.interface";
import { ElectricGuitar } from "../interfaces/electric-guitar.interface";
import { Instrument } from "../interfaces/instrument.interface";
import { BassGuitarType } from "./types/bass-guitar.type";
import { DigitalPianoType } from "./types/digital-piano.type";
import { ElectricGuitarType } from "./types/electric-guitar.type";

type InstrumentImplementation =
  | ElectricGuitarType
  | BassGuitarType
  | DigitalPianoType

@Injectable()
export class InstrumentTypeFactoryService {

  create(instrument: Instrument): InstrumentImplementation | null {
    switch (instrument.category.name) {
      case CategoryName.ELECTRIC_GUITAR:
        return new ElectricGuitarType(instrument as ElectricGuitar)
      case CategoryName.BASS_GUITAR:
        return new BassGuitarType(instrument as BassGuitar)
      case CategoryName.DIGITAL_PIANO:
        return new DigitalPianoType(instrument as DigitalPiano)
      default:
        return null
    }
  }
}
