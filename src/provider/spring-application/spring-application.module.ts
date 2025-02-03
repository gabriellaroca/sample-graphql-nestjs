import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SpringApplicationService } from './spring-application.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.getOrThrow<string>('SPRING_APP_BASE_URL'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [SpringApplicationService],
  exports: [SpringApplicationService],
})
export class SpringApplicationModule {}
