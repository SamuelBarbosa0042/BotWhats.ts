class templateTeste{

    static menuWelcome(){
        return `1 - ponto\n2 - pj\n3 - qualquer coisa`
    }

    static menuHora(){
        return `1- adiciona \n2- exclui 3- \nqualquer ocisa`
    }
    static defaultErro(menu:any){
        return `Opção invalida, selecione conforme menu\n${menu}`
    }

}
export default templateTeste
