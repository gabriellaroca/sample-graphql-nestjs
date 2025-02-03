import { Module } from '@nestjs/common';
import { SpringApplicationModule } from 'src/provider/spring-application/spring-application.module';
import { EscolaResolver } from './escola.resolver';
import { EscolaService } from './escola.service';

@Module({
  imports: [SpringApplicationModule],
  providers: [EscolaResolver, EscolaService],
})
export class EscolaModule {}
