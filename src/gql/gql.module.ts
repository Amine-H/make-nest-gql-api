import { Module } from '@nestjs/common';
import { InstrumentResolver } from './resolvers/instrument.resolver';

const RESOLVERS = [InstrumentResolver];

const MUTATIONS = [];

@Module({
  providers: [...RESOLVERS, ...MUTATIONS],
  exports: [...RESOLVERS, ...MUTATIONS],
})
export class GqlModule {}
