export class Erro {
    mensagemUsuario: string;
    mensagemDesenvolvedor: string;
    errorCode: number = 0;
    httpStatus: number = 0;

    constructor(){}
}


export class ErrorCode {

    // PESSOA 
	// 1000 a 1019 -> Numeros reservados para erros relacionada a pessoa
    static readonly PESSOA_DADOS_INVALIDOS:number = 1000;
	static readonly PESSOA_TIPO_NAO_INFORMADO:number = 1001;
	static readonly PESSOA_TIPO_INVALIDO:number = 1002;
    static readonly PESSOA_ERRO_AO_SALVAR:number = 1003;
    static readonly PESSOA_CPF_JA_EXISTE:number = 1004;
    static readonly PESSOA_CNPJ_JA_EXISTE:number = 1005;
    
    
}