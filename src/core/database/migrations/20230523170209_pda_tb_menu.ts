import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('pda_tb_menu', (table: Knex.TableBuilder) => {
        table.integer('Codigo_Menu');
        table.string('menu');
    });
  }


export async function down(knex: Knex): Promise<void> {
}

