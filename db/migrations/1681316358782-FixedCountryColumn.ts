import { MigrationInterface, QueryRunner } from "typeorm";

export class FixedCountryColumn1681316358782 implements MigrationInterface {
    name = 'FixedCountryColumn1681316358782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "covid_observations" RENAME COLUMN "country_region" TO "country"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "covid_observations" RENAME COLUMN "country" TO "country_region"`);
    }

}
