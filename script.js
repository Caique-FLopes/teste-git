<<<<<<< HEAD
=======
// 1 – Cadastro inteligente
// Crie uma função que:
// Peça nome, idade e altura do usuário
// Converta os dados corretamente (string → número)
// Valide se idade é um número válido
// Use uma função para verificar se a pessoa é maior de idade
// Exiba uma mensagem personalizada
// Trate erros caso o usuário digite valores inválidos
/**
 * @author Caique
 */

function exercicio1(){
    try{
        let nome = prompt('Digite o seu Nome!');
        let idade = parseInt(prompt('Digite a sua Idade!'));
        let altura = parseFloat(prompt('Digite a sua Altura!'));
    
        if(idade < 0){
            throw "Valor de idade incorreto";
        }
    
        console.log(`${nome} é ${validaIdade(idade)}.`);
    } catch(err){
        console.error(err);
    }
}

function validaIdade(idade){
    if(idade >= 18){
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

// 2 – Calculadora com menu
// Crie uma função calculadora que:
// Mostre um menu (soma, subtração, multiplicação, divisão)
// Receba dois números do usuário
// Use switch ou if
// Use funções para cada operação
// Faça loop para permitir várias operações
// Trate divisão por zero com erro
/**
 * @author João França
 */

// 3 – Adivinhe o número
// Gere um número aleatório
// Peça palpites ao usuário
// Use loop até acertar
// Dê dicas (maior ou menor)
// Conte tentativas
// Use função para validar entrada
/**
 * @author Miguel
 */

// 4 – Sistema de notas
// Receba várias notas (loop)
// Calcule média (função)
// Mostre situação (aprovado/reprovado)
// Valide entradas
// Permita sair digitando "fim"
/**
 * @author Pamela
 */


// 5 – Conversor universal
// Converta:
// Celsius ↔ Fahrenheit
// Km ↔ Milhas
// Menu interativo
// Funções para cada conversão
// Validação de tipo
// Loop para múltiplas conversões
/**
 * @author Adriel
 */
function exercicio5() {
    console.log("\n--- Conversor de Medida ---");
    console.log("1. Quilômetros para Milhas");
    console.log("2. Milhas para Quilômetros");
    console.log("\n--- Conversor de Temperatura ---");
    console.log("3. Celsius para Fahrenheit");
    console.log("4. Fahrenheit para Celsius");
    console.log("0. Sair");

    let rodando = true;
    while (rodando) {
        const opcao = prompt("Escolha uma opção: ");

        if (opcao === "1") {
            const quilômetros = parseFloat(prompt("Digite a medida em quilômetros: "));
            if (!isNaN(quilômetros)) {
                console.log(`\n${quilômetros}Km = ${(quilômetros * 0.621).toFixed(2)}M`);
            } else {
                console.log("Entrada inválida!");
            }
        } else if (opcao === "2") {
            const milhas = parseFloat(prompt("Digite a medida em milhas: "));
            if (!isNaN(milhas)) {
                console.log(`\n${milhas}M = ${(milhas * 1.609).toFixed(2)}Km`);
            } else if (opcao == "3") {
                const celcius = parseFloat(prompt("Digite a temperatura em celcius: "));
                if (!isNaN(celcius)) {
                console.log(`\n${celsius}°C = ${(celsius * 9/5 + 32).toFixed(2)}°F`);
            } else if (opcao === "4") {
                const fahrenheit = parseFloat(prompt("Digite a temperatura em fahrenheit: "));
            console.log(`\n${fahrenheit}°F = ${((fahrenheit - 32) * 5/9).toFixed(2)}°C`);
        } else {
            console.log("Opção inválida!");
                }
            }
        } 
    }
}  

// 6 – Login com tentativas
// Crie usuário e senha fixos
// Peça login
// Permita até 3 tentativas
// Use loop + condição
// Crie função de validação
// Lance erro após 3 falhas
/**
 * @author Paulo
 */

// 7 – Lista de compras
// Permita adicionar itens (array)
// Mostrar lista
// Remover item
// Use funções para cada ação
// Loop com menu
// Valide entradas inválidas
/**
 * @author Steven
 */


// 8 – Tabuada personalizada
// Peça um número
// Mostre tabuada de 1 a 10
// Use loop
// Função para gerar tabuada
// Trate erro se não for número
/**
 * @author João Victor Doniak
 */
function exercio8(){
    function gerarTabuada(){
        const entrada = prompt("Digite um número para ver a tabuada:");
        const numero = parseFloat(entrada);
        if (isNaN(numero)) {
            console.error("Erro: Por favor, digite um número válido.");
            return;
        }

        console.log('--- Tabuada do ${numero} ---');
        for (let i = 1; i <= 10; i++) {
            console.log('${numero} x ${i} = ${numero * i}');
        }
    }
    gerarTabuada();
}

// 9 – Verificador de senha forte
// Peça uma senha
// Verifique:
// tamanho mínimo
// número
// letra maiúscula
// Use função
// Retorne mensagens diferentes
// Trate entrada inválida


/*
 * @author Larissa
 */



// 10 – Sistema de banco simples
// Saldo inicial
// Menu:
// Depositar
// Sacar
// Ver saldo
// Use funções
// Valide valores
// Não permitir saldo negativo
// Loop contínuo
/* 
    *@author Pompeo
*/

function exercicio10() {
    let saldo = 85000;
    let opcao = prompt(
        'Bem vindo ao banco HyperPay - Feito pra você!!\n 0 - Depositar\n1 - Sacar\n2 - Ver Saldo\n3 - Sair'
    );

    if (opcao == "0") {
        let valor = Number(prompt("Digite o valor para depositar:"))
        saldo += valor
        alert("Depósito realizado. Saldo atual: " + saldo)

    } else if (opcao == "1") {
        let valor = Number(prompt("Digite o valor para sacar:"))
        saldo -= valor
        alert("Saque realizado. Saldo atual: " + saldo)

    } else if (opcao == "2") {
        alert("Seu saldo é: " + saldo)

    } else if (opcao == "3") {
    

    } else {
        alert("Opção Inválida")
    }
}

// 11 – Contador de palavras
// Peça uma frase
// Conte quantas palavras existem
// Use função
// Trate entradas vazias
// Mostre resultado
/**
 * @author Marlon
 */

// 12 – Jogo par ou ímpar
// Usuário escolhe par ou ímpar
// Computador gera número
// Soma e verifica resultado
// Loop de repetição
// Função para lógica
// Validação de escolha
/**
 * @author Natan
 */

// 13 – Filtro de números
// Receba vários números
// Armazene em array
// Separe pares e ímpares
// Use funções
// Loop para entrada
// Valide valores

function exercicio13(){
    let [pares, impares] = [[], []];
    
    prompt('Digite os numeros desejados (ultilize a virgula para separa-los): ').trim().split(',').map(n => parseFloat(n.trim())).map(e => (e % 2) == 0 ? pares.push(e) : impares.push(e));

    console.log(pares, impares);
}


// 14 – Agenda simples
// Adicionar contatos (nome + telefone)
// Listar contatos
// Buscar contato
// Use funções
// Loop com menu
// Trate erros de busca


// 15 – Simulador de fila
// Crie uma fila (array)
// Opções:
// Entrar na fila
// Atender próximo
// Ver fila
// Use funções
// Loop contínuo
// Trate fila vazia
>>>>>>> parent of b2d2254 (merge com a branch-larissa com a resolução do exercicio 9)
