import { Injectable } from '@nestjs/common';
import { fenderBass, fenderGuitar, lesPaulGuitar, rolandPiano } from '../mocks';
import { Instrument } from '../interfaces/instrument.interface';

@Injectable()
export class InstrumentService {
  private instruments: Instrument[] = [
    fenderGuitar,
    lesPaulGuitar,
    fenderBass,
    rolandPiano,
  ];

  async findAll(): Promise<Instrument[]> {
    return this.instruments;
  }
}
