import { Module } from '@nestjs/common';
import { SpringApplicationModule } from 'src/provider/spring-application/spring-application.module';
import { AlunoResolver } from './aluno.resolver';
import { AlunoService } from './aluno.service';

@Module({
  imports: [SpringApplicationModule],
  providers: [AlunoResolver, AlunoService],
})
export class AlunoModule {}
