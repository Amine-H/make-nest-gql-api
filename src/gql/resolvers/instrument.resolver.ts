import { Query, Resolver } from '@nestjs/graphql';
import { InstrumentType } from '../types/instrument.type';

@Resolver(() => InstrumentType)
export class InstrumentResolver {
  @Query(() => [InstrumentType])
  async instruments(): Promise<InstrumentType[]> {
    return [new InstrumentType({ name: 'Fender Stratocaster' })];
  }
}
