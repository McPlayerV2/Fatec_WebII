namespace exemplo2 {
    // VAR - SEM TANTA SEGURANÇA, LET - PRIVADO PARA FUNÇÃO, CONT - CONSTANTE
    let numero: number;
    numero + 5;

    let resultado: number;
    resultado = numero + numero;
    console.log("A soma ente " + numero + " com " + numero + " é igual a: " + resultado);
    
    resultado =  numero - 4;
    console.log(`A subtração entre ${numero} com 4 é igual a ${resultado}`);
    
    resultado = numero * numero;
    console.log(`A mutiplicação entre ${numero} por ${numero} é igual a ${resultado}`);
    
    resultado = numero / numero ;
    console.log(`A divisão entre ${numero} por ${numero} é igual a ${resultado}`);
}