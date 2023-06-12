import client from '../wweb/Libwts';
import database from '../database/knexIndex'
import {MessageMedia, MessageAck} from 'whatsapp-web.js'
import { getConfigFileParsingDiagnostics } from 'typescript';
import templateTeste from '../functions/template';
import data from '../functions/date'



client.on('message', async (message) => {
    if ((await message.getChat()).isGroup) return;

    database('pda_tb_interacao').where({numeroTelefone:message.from}).delete();

    if(message.body == '0'){
        await database('pda_tb_interacao').delete().where({numeroTelefone:message.from})
        
        
        console.log('sessão encerrada pelo usuario')
        
        return client.sendMessage(message.from,'sessão encerrada pelo usuario')
    }

    const user = await database('pda_tb_usuario').select('*').where({numero:message.from})
    if(!user.length){ // se não tiver cadastrar
        if(message.body == '/cadastrar'){
            await database('pda_tb_interacao').insert({dialogo:'cadastro',numeroTelefone:message.from,DataInicio:new Date()})

            const posicao:any[string] = await database('pda_tb_interacao').select('dialogo').where({numeroTelefone:message.from}).first()
            
        
            const pagina = require(`../dialogs/${posicao.dialogo}`)
            const instancia = new pagina.default()
            instancia.execute(message)

            return
                
        }
        else{ // quando não é pra cadastrar
            return
        }

    }
    else{ // quando ja está cadastrado
        const posicao:any[string] = await database('pda_tb_interacao').select('dataInicio','dialogo').where({numeroTelefone:message.from}).first()

        const diaHoje = new Date()
        
        const DataLimite = data.addDays(diaHoje,1) /* funcao date.ts */
        
        //console.log('valida data ' + posicao.dataInicio > DataLimite + '\n' + posicao.dataInicio)

        


        if(!posicao || posicao.dataInicio > DataLimite ){
            
            message.reply('sessão expirada!')
            await database('pda_tb_interacao').insert({dialogo:'welcome',numeroTelefone:message.from,DataInicio:new Date()})
            client.sendMessage(message.from,templateTeste.menuWelcome())
            
            return;
        }
        else{
            
        
            console.log(' posicao.dialogo = ' + posicao.dialogo)

            const pagina = require(`../dialogs/${posicao.dialogo}`)
            const instancia = new pagina.default()
            instancia.execute(message)
        }

        }

        return;

    }
    
   
);
