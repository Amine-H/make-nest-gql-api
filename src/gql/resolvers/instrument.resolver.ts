import { Query, Resolver } from '@nestjs/graphql';
import { InstrumentService } from 'src/data-source/instrument.service';
import { InstrumentTypeFactoryService } from '../instrument-type-factory.service';
import { AbstractInstrumentType } from '../types/abstract-instrument.type';

@Resolver(() => AbstractInstrumentType)
export class InstrumentResolver {
  constructor(
    private readonly instrumentService: InstrumentService,
    private readonly instrumentTypeFactoryService: InstrumentTypeFactoryService,
  ) {
  }

  @Query(() => [AbstractInstrumentType])
  async instruments(): Promise<AbstractInstrumentType<any>[]> {
    const instruments = await this.instrumentService.findAll()
    return instruments.map(instrument => (
      this.instrumentTypeFactoryService.create(instrument)
    ))
  }
}
