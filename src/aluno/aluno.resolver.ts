import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AlunoService } from './aluno.service';
import { CreateAlunoInput } from './dto/create-aluno.input';
import { Movimento, PortariaAlunoOutput } from './dto/portaria-aluno.input';
import { UpdateAlunoInput } from './dto/update-aluno.input';
import { Aluno } from './entities/aluno.entity';

@Resolver(() => Aluno)
export class AlunoResolver {
  constructor(private readonly alunoService: AlunoService) {}

  @Query(() => [Aluno])
  async getAlunos() {
    return this.alunoService.getAllAlunos();
  }

  @Query(() => Aluno)
  async getAlunoById(@Args('id') id: number) {
    return this.alunoService.getAlunoById(id);
  }

  @Mutation(() => Aluno)
  async createAluno(@Args('alunoDto') alunoDto: CreateAlunoInput) {
    return this.alunoService.createAluno(alunoDto);
  }

  @Mutation(() => Aluno)
  async updateAluno(
    @Args('id') id: number,
    @Args('alunoDto') alunoDto: UpdateAlunoInput,
  ) {
    return this.alunoService.updateAluno(id, alunoDto);
  }

  @Mutation(() => PortariaAlunoOutput)
  async porteiro(
    @Args('id') id: number,
    @Args('movimento') movimento: Movimento,
  ) {
    return this.alunoService.porteiro(id, movimento);
  }
}
