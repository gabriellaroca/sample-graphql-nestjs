import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SpringApplicationService } from './spring-application.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:8081',
    }),
  ],
  providers: [SpringApplicationService],
  exports: [SpringApplicationService],
})
export class SpringApplicationModule {}
