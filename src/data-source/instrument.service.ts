import { Injectable } from '@nestjs/common';
import { fenderBass, fenderGuitar, lesPaulGuitar, rolandPiano } from '../mocks';
import { Instrument } from '../interfaces/instrument.interface';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class InstrumentService {
  private pubSub = new PubSub();
  private instruments: Instrument[] = [
    fenderGuitar,
    lesPaulGuitar,
    fenderBass,
    rolandPiano,
  ];

  async findAll(): Promise<Instrument[]> {
    return this.instruments;
  }

  instrumentAdded() {
    return this.pubSub.asyncIterator('added')
  }

  async addInstrument(instrument: Instrument): Promise<Instrument> {
    this.instruments.push(instrument)
    this.pubSub.publish('added', { instrumentAdded: instrument });

    return instrument
  }
}
