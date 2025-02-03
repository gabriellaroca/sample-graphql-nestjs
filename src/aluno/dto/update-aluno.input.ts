import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateAlunoInput } from './create-aluno.input';

@InputType()
export class UpdateAlunoInput extends PartialType(CreateAlunoInput) {
  @Field(() => Int)
  id: number;
}
