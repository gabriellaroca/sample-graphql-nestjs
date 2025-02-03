import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AlunoModule } from './aluno/aluno.module';
import { EscolaModule } from './escola/escola.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    EscolaModule,
    AlunoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
