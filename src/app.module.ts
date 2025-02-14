import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './core/config/config';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
