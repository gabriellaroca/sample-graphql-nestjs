import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Escola {
  @Field(() => Int)
  id: number;

  @Field()
  nome: string;

  @Field()
  cnpj: string;

  @Field()
  endereco: string;

  @Field()
  telefone: string;

  @Field(() => [Sala])
  salas: Sala[];
}

@ObjectType()
export class Sala {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nome: string;

  @Field(() => Int)
  alunos: number;

  @Field(() => String)
  nivel: string;
}
