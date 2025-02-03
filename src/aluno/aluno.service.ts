import { Injectable } from '@nestjs/common';
import { SpringApplicationService } from 'src/provider/spring-application/spring-application.service';
import { Aluno as AlunoSpring } from '../provider/spring-application/response';
import { CreateAlunoInput } from './dto/create-aluno.input';
import { Movimento } from './dto/portaria-aluno.input';
import { UpdateAlunoInput } from './dto/update-aluno.input';
import { Aluno, Genero } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    private readonly springApplicationService: SpringApplicationService,
  ) {}

  async getAllAlunos(): Promise<Aluno[]> {
    const alunos = await this.springApplicationService.getAlunos();
    return alunos.map((aluno: AlunoSpring) => ({
      id: aluno.id,
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      sexo: aluno.sexo as Genero,
      nascimento: new Date(aluno.nascimento),
      responsavel: aluno.responsavel,
    }));
  }
  async getAlunoById(id: number): Promise<Aluno> {
    const aluno = await this.springApplicationService.getAlunoById(id);
    return {
      id: aluno.id,
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      sexo: aluno.sexo as Genero,
      nascimento: new Date(aluno.nascimento),
      responsavel: aluno.responsavel,
    };
  }

  async createAluno(alunoDto: CreateAlunoInput): Promise<Aluno> {
    const aluno = await this.springApplicationService.createAluno(alunoDto);
    return {
      id: aluno.id,
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      sexo: aluno.sexo as Genero,
      nascimento: new Date(aluno.nascimento),
      responsavel: aluno.responsavel,
      sala: aluno.sala,
    };
  }

  async updateAluno(id: number, alunoDto: UpdateAlunoInput): Promise<Aluno> {
    const aluno = await this.springApplicationService.updateAluno(id, alunoDto);
    return {
      id: aluno.id,
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      sexo: aluno.sexo as Genero,
      nascimento: new Date(aluno.nascimento),
      responsavel: aluno.responsavel,
    };
  }

  async porteiro(id: number, movimento: Movimento) {
    await this.springApplicationService.portaria(id, movimento);
    return {
      id,
      movimento,
    };
  }
}
