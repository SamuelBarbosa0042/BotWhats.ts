// imports
import database from "../database/knexIndex.ts"


class cadastro
{
    async execute(message: any) {
        
        const cadastrado = await database('pda_tb_usuario').select('*').first().where({numero:message.from})




        console.log(await cadastrado)   

        if(!cadastrado){
            await database('pda_tb_usuario').insert({usuario:message._data.notifyName,numero:message.from})

            message.reply('informe seu email')

            return
        }
        else{
            if( await cadastrado.email == null && await cadastrado.emailHead == null){
                let eMail = message.body

                await database('pda_tb_usuario').update({email:eMail}).where({numero:message.from})

                message.reply('informe o email do seu head ou insira' + ' head ' + 'caso voce for o head:')
    
                return
            }
            else{
                if(await cadastrado.email != null && await cadastrado.emailHead == null){
                    //insere gestor ou não
                    if(message.body == 'head'){
                        await database('pda_tb_usuario').update({emailHead:'true'}).where({numero:message.from})
                    }
                    else{
                        await database('pda_tb_usuario').update({emailHead:message.body}).where({numero:message.from})
                    }  
                    await database('pda_tb_interacao').update({dialogo:'welcome'}).where({numeroTelefone:message.from})
                    
                    return message.reply('Usuario cadastrado com sucesso!!')
                }

            }

        }
        
        
        return
    }
}
export default cadastro