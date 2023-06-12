import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('pda_tb_interacao', table => {
        table.increments('codigoInteracao');
        table.string('numeroTelefone')
        table.string('dialogo');
        table.date('DataInicio')
  
      });
}


export async function down(knex: Knex): Promise<void> {
}

