import { Module } from '@nestjs/common';
import { InstrumentService } from './instrument.service';

const SHARED_SERVICES = [InstrumentService];

@Module({
  providers: [...SHARED_SERVICES],
  exports: [...SHARED_SERVICES],
})
export class DataSourceModule {}
