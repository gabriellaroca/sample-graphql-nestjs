import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateAlunoInput } from 'src/aluno/dto/create-aluno.input';
import { Movimento } from 'src/aluno/dto/portaria-aluno.input';
import { Aluno, Escola } from './response';
@Injectable()
export class SpringApplicationService {
  constructor(private readonly httpService: HttpService) {}

  async getEscolas(): Promise<Escola[]> {
    const response = await firstValueFrom(this.httpService.get('/escola'));
    return response.data;
  }

  async getEscolaById(id: number): Promise<Escola> {
    const response = await firstValueFrom(
      this.httpService.get(`/escola/${id}`),
    );
    return response.data;
  }

  async createEscola(escolaDto: any): Promise<Escola> {
    const response = await firstValueFrom(
      this.httpService.post('/escola', escolaDto),
    );
    return response.data;
  }

  async updateEscola(id: number, escolaDto: any): Promise<Escola> {
    const response = await firstValueFrom(
      this.httpService.put(`/escola/${id}`, escolaDto),
    );
    return response.data;
  }

  async getAlunos(): Promise<Aluno[]> {
    const response = await firstValueFrom(this.httpService.get('/aluno'));
    return response.data;
  }

  async getAlunoById(id: number): Promise<Aluno> {
    const response = await firstValueFrom(this.httpService.get(`/aluno/${id}`));
    return response.data;
  }

  async createAluno(alunoDto: CreateAlunoInput): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post('/aluno', {
        ...alunoDto,
        sala: { id: alunoDto.sala },
      }),
    );
    return response.data;
  }

  async updateAluno(id: number, alunoDto: any): Promise<Aluno> {
    const response = await firstValueFrom(
      this.httpService.put(`/aluno/${id}`, alunoDto),
    );
    return response.data;
  }

  async deleteEscola(id: number): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.delete(`/escola/${id}`),
    );
    return response.data;
  }

  async deleteAluno(id: number): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.delete(`/aluno/${id}`),
    );
    return response.data;
  }

  async portaria(id: number, movimento: Movimento): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post(`/portaria/${movimento.toLocaleLowerCase()}/${id}`),
    );
    return response.data;
  }
}
