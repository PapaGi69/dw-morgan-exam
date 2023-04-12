import { MigrationInterface, QueryRunner } from "typeorm";

export class CovidObservationsTable1681314416850 implements MigrationInterface {
    name = 'CovidObservationsTable1681314416850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "covid_observations" ("id" SERIAL NOT NULL, "observation_date" TIMESTAMP NOT NULL, "province_state" character varying NOT NULL, "country_region" character varying NOT NULL, "last_update" TIMESTAMP NOT NULL, "confirmed" character varying NOT NULL, "deaths" character varying NOT NULL, "recovered" character varying NOT NULL, CONSTRAINT "PK_98c0567851ee6188c95b4973437" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "covid_observations"`);
    }

}
