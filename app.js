let titulo = document.querySelector('h1');
titulo.innerHTML = 'hello Word';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');

}
function exibirAlerta() {
    alert('A verdade está lá fora!');
}
function exibirPrompt() {
    let nomeDacidade = prompt('Qual sua Cidade?');
    alert(`Já estive lá ${nomeDacidade} tem um céu azul`);
}
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);

}