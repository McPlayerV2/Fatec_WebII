namespace exer4 {
        //Faça um progama que receba o sálario de um funcionario, calcule e mostre o novo salário, sabendo-se que este sofreu um aumento de 25% sem entrada de informação
        const salarioAtual: number = 2000; 

        const aumentoPercentual: number = 25;
        const aumentoDecimal: number = aumentoPercentual / 100;
        
        const novoSalario: number = salarioAtual * (1 + aumentoDecimal);
        
        console.log(`O novo salário do funcionário é: R$${novoSalario.toFixed(2)}`);
        
}