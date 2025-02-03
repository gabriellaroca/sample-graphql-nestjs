import { Field, InputType } from '@nestjs/graphql';

// {
//   "id": 0,
//   "nome": "string",
//   "cnpj": "string",
//   "endereco": "string",
//   "telefone": "string",
//   "salas": [
//     {
//       "id": 0,
//       "nome": "string",
//       "nivel": "FUNDAMENTAL",
//       "alunos": [
//         {
//           "id": 0,
//           "nome": "string",
//           "sobrenome": "string",
//           "sexo": "MASCULINO",
//           "nascimento": "2025-02-03T05:18:51.459Z",
//           "responsavel": "string"
//         }
//       ]
//     }
//   ]
// }
@InputType()
export class CreateEscolaInput {
  @Field(() => String)
  nome: string;

  @Field(() => String)
  cnpj: string;

  @Field(() => String)
  endereco: string;

  @Field(() => String)
  telefone: string;

  @Field(() => [CreateSalaInput])
  salas: CreateSalaInput[];
}

@InputType()
export class CreateSalaInput {
  @Field(() => String)
  nome: string;

  @Field(() => String)
  nivel: string;
}
