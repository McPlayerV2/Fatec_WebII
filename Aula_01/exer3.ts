namespace exer3 {
    //faça um programa que receba 3 notas , calcule e mostre a média ponderada entre elas
const nota1: number = 7.5;
const peso1: number = 2;

const nota2: number = 8.0;
const peso2: number = 3;

const nota3: number = 6.5;
const peso3: number = 1;

// //if (nota3 == 0){
//   situacao = false
// } else {
//   situacao = true
// }

let situacao: boolean = nota3 == 0 ? true : false;

if(!situacao && nota2 >= 5){
   let media: number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
   console.log(`A média final é: ${media.toFixed(2)}`);
} else{
  console.log(`Aluo não entregou o trabalho e sua média foi 0`);
}

const somaPesos: number = peso1 + peso2 + peso3;
const mediaPonderada: number =
  (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);

}