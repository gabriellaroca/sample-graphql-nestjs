import { Field, InputType, Int } from '@nestjs/graphql';
import { Genero } from '../entities/aluno.entity';
// {
//   "id": 0,
//   "nome": "string",
//   "sobrenome": "string",
//   "sexo": "MASCULINO",
//   "nascimento": "2025-02-03T05:06:25.840Z",
//   "responsavel": "string"
// }
@InputType()
export class CreateAlunoInput {
  @Field(() => String, { description: 'Nome do aluno' })
  nome: string;

  @Field(() => String, { description: 'Sobrenome do aluno' })
  sobrenome: string;

  @Field(() => Genero, { description: 'Sexo do aluno' })
  sexo: Genero;

  @Field(() => Date, { description: 'Data de nascimento do aluno' })
  nascimento: Date;

  @Field(() => String, { description: 'Responsável pelo aluno' })
  responsavel: string;

  @Field(() => Int, { description: 'ID da sala do aluno' })
  sala: number;
}
