//import templateTeste from '../functions/template';
import template02 from '../functions/teste02';
import client from '../wweb/Libwts';


class pontoHora {
    execute(message:any){ // menu de ponto
        const option = parseInt(message.body)

        console.log(option)

        switch(option){
            case 1:{
                console.log('teste 2')
                break;
            }
            default:{
                //client.sendMessage(message.from,template.defaultErro(template.menuHora()))
                //template.defaultErro(template.menuHora());
                console.log(template02('menuHora'))
                console.log('entrou aqui agora')
                break;
            }
        }
    }


}
export default pontoHora