// tela para selecionar o primeiro menu
import database from '../database/knexIndex';
import data from "../functions/date";
//import templateTeste from "../functions/template";
import template02 from '../functions/teste02';
import client from '../wweb/Libwts';



class welcome{
    // envia as opções e recebe qual a opção selecionada
    async execute(message: any){
        const option:number = parseInt(message.body)

        

        switch(option){
            case 1:{
                 console.log('1')
                 await database('pda_tb_interacao').update({dialogo:'ponto'}).where({numeroTelefone:message.from})
                 //client.sendMessage(message.from,template.menuHora())
                 message.reply(template02('menuHora'))
                 break;
                }
            case 2:{
                console.log('2')
                break;}
            case 3: {
                console.log('3')
                break;}
            default: {
                
                //client.sendMessage(message.from,templateTeste.defaultErro(templateTeste.menuWelcome()))
                message.reply(template02('menuWelcome'))
                
                break;}
        }

    }
    
}
export default welcome