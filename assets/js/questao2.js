/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function verificarNumeroFibonacci(numero) {
  if (numero < 0) return false;

  let a = 0,
    b = 1;
  while (a < numero) {
    [a, b] = [b, a + b];
  }
  return a === numero;
}

function checarNumeroFibonacci() {
  const input = document.getElementById("numero");
  const numero = parseInt(input.value, 10);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Por favor, insira um número válido.";
    return;
  }

  if (verificarNumeroFibonacci(numero)) {
    resultado.innerHTML = `<span style="color:  #5e1a03; font-size: 1.4rem">${numero}</span> pertence à sequência de Fibonacci.`;
  } else {
    resultado.innerHTML = `<span style="color:  #5e1a03; font-size: 1.4rem">${numero}</span> não pertence à sequência de Fibonacci.`;
  }
}
