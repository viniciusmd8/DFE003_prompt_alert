// // - Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

// //   Entrada de dados: ler um número.
// //   Processamento: calcular o dobro.
// //   Saída: informar o resultado.

// const numero = prompt('Insira o número que será dobrado');
// const dobro = numero * 2;
// alert(dobro);

// // - Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

// // ~~~javascript

// //   Entrada de dados: ler o valor da conta.
// //   Processamento: calcular junto com o valor do custo do garçom.
// //   Saída: informar o resultado.

// const valorJantar = parseFloat(prompt('Insira o valor do jantar:'));
// const opcaoPagamento = parseInt(
//   prompt('Escolha a opção de pagamento:\n1. 10%\n2. 15%\n3. 20%')
// );

// let taxa;
// if (opcaoPagamento === 1) {
//   taxa = 0.1; // 10%
// } else if (opcaoPagamento === 2) {
//   taxa = 0.15; // 15%
// } else if (opcaoPagamento === 3) {
//   taxa = 0.2; // 20%
// } else {
//   alert('Opção inválida');
//   throw new Error('Opção inválida');
// }

// const valorComTaxa = valorJantar * (1 + taxa);
// alert(
//   `O valor total do jantar com ${
//     taxa * 100
//   }% de taxa de serviço é de R$ ${valorComTaxa}`
// );

// - Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

// ~~~javascript

//   Entrada de dados: ler o valor da conta e a quantidade de clientes.
//   Processamento: calcular o valor a ser pago por cliente.
//   Saída: informar o resultado.

const valorTotal = parseInt(prompt('Insira o valor total da conta'));
const numeroPessoas = parseInt(
  prompt('Insira quantidade de pessoas que irão dividir a conta')
);
const valorPorPessoa = valorTotal / numeroPessoas;
alert(`Cada pessoa pagará: R$ ${valorPorPessoa}`);
