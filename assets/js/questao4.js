const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamentoPorEstado) {
  const totalMensal = Object.values(faturamentoPorEstado).reduce(
    (total, valor) => total + valor,
    0
  );

  const percentuais = {};
  for (let estado in faturamentoPorEstado) {
    const valor = faturamentoPorEstado[estado];
    percentuais[estado] = ((valor / totalMensal) * 100).toFixed(2); // Arredondar para duas casas decimais
  }

  return percentuais;
}

function exibirPercentuais(percentuais) {
  console.log("Percentual de cada estado:");
  for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }
}

const percentuais = calcularPercentuais(faturamentoPorEstado);
exibirPercentuais(percentuais);
