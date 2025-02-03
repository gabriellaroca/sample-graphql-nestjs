import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEscolaInput } from './dto/create-escola.input';
import { UpdateEscolaInput } from './dto/update-escola.input';
import { Escola } from './entities/escola.entity';
import { EscolaService } from './escola.service';

@Resolver(() => Escola)
export class EscolaResolver {
  constructor(private readonly escolaService: EscolaService) {}

  @Query(() => [Escola])
  async getEscolas() {
    return this.escolaService.getAll();
  }

  @Query(() => Escola)
  async getEscolaById(@Args('id') id: number) {
    return this.escolaService.getEscolaById(id);
  }

  @Mutation(() => Escola)
  async createEscola(@Args('escolaDto') escolaDto: CreateEscolaInput) {
    return this.escolaService.createEscola(escolaDto);
  }

  @Mutation(() => Escola)
  async updateEscola(
    @Args('id') id: number,
    @Args('escolaDto') escolaDto: UpdateEscolaInput,
  ) {
    return this.escolaService.updateEscola(id, escolaDto);
  }
}
