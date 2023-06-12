const template02 = (ismenu:'menuWelcome'|'menuHora'|'defaultErro') => {
    switch(ismenu){
        case 'menuHora':{
            return `1- adiciona \n2- exclui 3- \nqualquer ocisa`
        }
        case 'menuWelcome':{
            return `1 - ponto\n2 - pj\n3 - qualquer coisa`
        }
        case 'defaultErro':{
            return `Opção invalida, selecione conforme menu\n}`
        }
        default:{
            return 'default'
        }
    }
}
export default template02