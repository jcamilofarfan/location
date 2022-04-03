import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1649002334220 implements MigrationInterface {
    name = 'firstMigration1649002334220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location_child" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "area" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "locationParentId" integer, CONSTRAINT "PK_051babf32d70001b6d2c24bfa51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location_parent" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "area" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_92137b1457c0969fe2d20a9faff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "location_child" ADD CONSTRAINT "FK_31f4afd3766ff903963f3a4038b" FOREIGN KEY ("locationParentId") REFERENCES "location_parent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location_child" DROP CONSTRAINT "FK_31f4afd3766ff903963f3a4038b"`);
        await queryRunner.query(`DROP TABLE "location_parent"`);
        await queryRunner.query(`DROP TABLE "location_child"`);
    }

}
