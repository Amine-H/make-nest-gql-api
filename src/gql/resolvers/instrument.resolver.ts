import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { InstrumentService } from '../../data-source/instrument.service';
import { CategoryName } from '../../interfaces/category.interface';
import { InstrumentTypeFactoryService } from '../instrument-type-factory.service';
import { AbstractInstrumentType } from '../types/abstract-instrument.type';
import { AddElectricGuitarInputType } from '../types/add-electric-guitar-input.type';
import { ElectricGuitarType } from '../types/electric-guitar.type';
import { v4 as uuid } from 'uuid'

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

  @Mutation(() => AbstractInstrumentType)
  async addElectricGuitar(
    @Args('data') guitar: AddElectricGuitarInputType,
  ) {
    return this.instrumentService.addInstrument(new ElectricGuitarType({
      ...guitar,
      id: uuid(),
      category: {
        name: CategoryName.ELECTRIC_GUITAR,
      },
    }))
  }

  @Subscription(() => AbstractInstrumentType, {
    name: 'instrumentAdded',
  })
  async instrumentAdded() {
    return this.instrumentService.instrumentAdded()
  }
}
