import { Module } from '@nestjs/common';
import { DataSourceModule } from '../data-source/data-source.module';
import { InstrumentResolver } from './resolvers/instrument.resolver';
import { InstrumentTypeFactoryService } from './instrument-type-factory.service';

const RESOLVERS = [InstrumentResolver];

const MUTATIONS = [];

@Module({
  imports: [DataSourceModule],
  providers: [...RESOLVERS, ...MUTATIONS, InstrumentTypeFactoryService],
  exports: [...RESOLVERS, ...MUTATIONS],
})
export class GqlModule { }
