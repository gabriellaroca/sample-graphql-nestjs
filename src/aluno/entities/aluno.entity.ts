import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum Genero {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
}

registerEnumType(Genero, {
  name: 'Genero',
});

@ObjectType()
export class Aluno {
  @Field(() => Int)
  id: number;

  @Field()
  nome: string;

  @Field()
  sobrenome: string;

  @Field(() => Genero)
  sexo: Genero;

  @Field()
  nascimento: Date;

  @Field()
  responsavel: string;

  @Field(() => Int)
  sala?: number;
}
