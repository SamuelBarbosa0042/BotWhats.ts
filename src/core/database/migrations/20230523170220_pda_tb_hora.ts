import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('pda_tb_hora', table => {
        table.increments('codigo_hora');
        table.integer('quantidade_horas');
        table.string('data');
        table.string('comentario');
        table.string('chamado');
        table.string('numeroTelefone');
        table.boolean('checkHead');
        table.boolean('checkFinanceiro');
      });
}


export async function down(knex: Knex): Promise<void> {
}

