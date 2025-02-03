import { Injectable } from '@nestjs/common';
import { SpringApplicationService } from 'src/provider/spring-application/spring-application.service';
import { CreateEscolaInput } from './dto/create-escola.input';
import { UpdateEscolaInput } from './dto/update-escola.input';
import { Escola } from './entities/escola.entity';
@Injectable()
export class EscolaService {
  constructor(private readonly springApp: SpringApplicationService) {}

  async getAll(): Promise<Escola[]> {
    const escolaResposta: Escola[] = [];

    const escolas = await this.springApp.getEscolas();
    if (!escolas && !escolas.length) {
      return [];
    }

    for (const escola of await escolas) {
      escolaResposta.push({
        id: escola.id,
        nome: escola.nome,
        cnpj: escola.cnpj,
        endereco: escola.endereco,
        telefone: escola.telefone,
        salas: escola.salas.map((sala) => ({
          id: sala.id,
          nome: sala.nome,
          nivel: sala.nivel,
          alunos: sala.alunos.length,
        })),
      });

      return escolaResposta;
    }

    return escolaResposta;
  }

  async getEscolaById(id: number): Promise<Escola> {
    const escola = await this.springApp.getEscolaById(id);
    if (!escola) {
      return null;
    }

    return {
      id: escola.id,
      nome: escola.nome,
      cnpj: escola.cnpj,
      endereco: escola.endereco,
      telefone: escola.telefone,
      salas: escola.salas.map((sala) => ({
        id: sala.id,
        nome: sala.nome,
        nivel: sala.nivel,
        alunos: sala.alunos.length,
      })),
    };
  }

  async createEscola(escolaDto: CreateEscolaInput): Promise<Escola> {
    const escola = await this.springApp.createEscola(escolaDto);
    if (!escola) {
      return null;
    }
    return {
      id: escola.id,
      nome: escola.nome,
      cnpj: escola.cnpj,
      endereco: escola.endereco,
      telefone: escola.telefone,
      salas: escola.salas.map((sala) => ({
        id: sala.id,
        nome: sala.nome,
        nivel: sala.nivel,
        alunos: sala.alunos?.length || 0,
      })),
    };
  }

  async updateEscola(
    id: number,
    escolaDto: UpdateEscolaInput,
  ): Promise<Escola> {
    const escola = await this.springApp.updateEscola(id, escolaDto);
    if (!escola) {
      return null;
    }
    return {
      id: escola.id,
      nome: escola.nome,
      cnpj: escola.cnpj,
      endereco: escola.endereco,
      telefone: escola.telefone,
      salas: escola.salas.map((sala) => ({
        id: sala.id,
        nome: sala.nome,
        nivel: sala.nivel,
        alunos: sala.alunos.length,
      })),
    };
  }
}
