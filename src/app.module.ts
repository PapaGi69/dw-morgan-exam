import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaseModule } from './case/case.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),   
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), CaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
