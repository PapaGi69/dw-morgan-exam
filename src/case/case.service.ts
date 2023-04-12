import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from './entities/case.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CaseService {
  constructor(    
    @InjectRepository(Case) private caseRepository: Repository<Case>,
  ){}
  
  private readonly logger = new Logger(CaseService.name);


  async getCasesByDate(date: Date, limit: number): Promise<any> {
    const METHOD = '[getCasesByDate]';
    this.logger.log(`${METHOD}`);

    try{
      let result = [];
      let finalResult = [];

      const cases = await this.caseRepository.createQueryBuilder("c")
      .select(`c.observation_date, c.country, c.confirmed, c.deaths, c.recovered`)
      .where({
        observation_date: date,

      })
      .andWhere("c.confirmed != :confirmed", { confirmed: "0.0" })
      .orderBy(`confirmed`, `DESC`)
      .limit(limit)
      .execute();

      this.logger.log(cases)
      
      if (!cases) {
        throw new NotFoundException(`Cases within date range does not exists`);
      }
      this.logger.log(cases)
      cases.forEach(
        async r => {
          result.push({
            country: r.country,
            confirmed: r.confirmed,
            deaths: r.deaths,
            recovered: r.recovered
        })
      });

      finalResult.push({
        observation_date: date,
        countries: result
      })

      return finalResult;
    } catch (error){
      this.logger.log(error)
    }
  }
}
