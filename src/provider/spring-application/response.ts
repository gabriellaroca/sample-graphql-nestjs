export class Aluno {
  id: number;
  nome: string;
  sobrenome: string;
  sexo: string;
  nascimento: number;
  responsavel: string;
}

export class Sala {
  id: number;
  nome: string;
  nivel: string;
  alunos: Aluno[];
}

export class Escola {
  id: number;
  nome: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  salas: Sala[];
}
