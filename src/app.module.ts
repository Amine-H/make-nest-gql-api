import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlModule } from './gql/gql.module';
import { DataSourceModule } from './data-source/data-source.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    GqlModule,
    DataSourceModule,
  ],
})
export class AppModule {}
