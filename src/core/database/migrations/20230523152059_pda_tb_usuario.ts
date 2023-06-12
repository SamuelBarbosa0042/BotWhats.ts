import { default as knex, Knex } from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('pda_tb_usuario', (table: Knex.TableBuilder) => {
        table.increments('codigo_usuario');
        table.string('usuario');
        table.string('numero');
        table.string('email');
        table.string('emailHead');
    });
  }
export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('pda_tb_usuario');
}