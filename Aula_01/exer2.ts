namespace exer2 {
          //faça um programa que receba três notas, calcule e mostre a média aritmetica entre eles
const nota1: number = 7.5;
const nota2: number = 8.0;
const nota3: number = 6.5;
const nota4: number = 10.0;

const media: number = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média aritmética é: ${media.toFixed(2)}`);
if (media >= 7)
{
    console.log (`Aluno aprovado com média de:  ${media.toFixed(2)}`)
} else if (media > 3){
    console.log(`Aluno está em recuperação com média de: ${media.toFixed(2)}`)
} else {
    console.log(`Aluno reprovado com édia de: ${media.toFixed(2)}`)
}

}