import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlModule } from './gql/gql.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    GqlModule,
  ],
})
export class AppModule {}
