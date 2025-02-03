import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateEscolaInput } from './create-escola.input';

@InputType()
export class UpdateEscolaInput extends PartialType(CreateEscolaInput) {
  @Field(() => Int)
  id: number;
}
