import { BadRequestException, Controller, Get, Logger, Query } from '@nestjs/common';
import { CaseService } from './case.service';


@Controller('top')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}
  private readonly logger = new Logger(CaseService.name);


  @Get('/confirmed?')
  async findByDateRange(
    @Query('observation_date') observation_date: Date,
    @Query('max_results') max_results: number,
  ) {
    if (observation_date && max_results) {
      return await this.caseService.getCasesByDate(observation_date, max_results);
    } else {
      throw new BadRequestException(`Incomplete Request Parameters`);
    }
  }

}
