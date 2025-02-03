import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum Movimento {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
}

registerEnumType(Movimento, {
  name: 'Movimento',
});

@InputType()
export class PortariaAlunoInput {
  @Field(() => Int, { description: 'ID do aluno' })
  id: number;

  @Field(() => Movimento, { description: 'Movimento do aluno' })
  movimento: Movimento;
}

@ObjectType()
export class PortariaAlunoOutput {
  @Field(() => Int)
  id: number;

  @Field(() => Movimento)
  movimento: Movimento;
}
