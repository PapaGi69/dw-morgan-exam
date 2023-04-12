import { Module } from '@nestjs/common';
import { CaseService } from './case.service';
import { CaseController } from './case.controller';
import { Case } from './entities/case.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Case]),
  ],
  controllers: [CaseController],
  providers: [CaseService]
})
export class CaseModule {}
