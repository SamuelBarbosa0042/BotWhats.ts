import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('pda_tb_submenu', table => {
        table.increments('Codigo_SubMenu');
        table.string('Codigo_menu');
        table.string('Descricao_submenu');
      });
}


export async function down(knex: Knex): Promise<void> {
}

