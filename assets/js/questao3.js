/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: */
//O menor valor de faturamento ocorrido em um dia do mês;
//O maior valor de faturamento ocorrido em um dia do mês;
//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

//IMPORTANTE

//a - Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
//b - Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDados = [
  { dia: "2024-09-01", faturamento: 200 },
  { dia: "2024-09-02", faturamento: 0 },
  { dia: "2024-09-03", faturamento: 300 },
  { dia: "2024-09-04", faturamento: 250 },
  { dia: "2024-09-05", faturamento: 0 },
  { dia: "2024-09-06", faturamento: 150 },
  { dia: "2024-09-07", faturamento: 100 },
  { dia: "2024-09-08", faturamento: 350 },
  { dia: "2024-09-09", faturamento: 0 },
  { dia: "2024-09-10", faturamento: 180 },
  { dia: "2024-09-11", faturamento: 0 },
  { dia: "2024-09-12", faturamento: 220 },
  { dia: "2024-09-13", faturamento: 0 },
  { dia: "2024-09-14", faturamento: 300 },
  { dia: "2024-09-15", faturamento: 0 },
  { dia: "2024-09-16", faturamento: 190 },
  { dia: "2024-09-17", faturamento: 0 },
  { dia: "2024-09-18", faturamento: 240 },
  { dia: "2024-09-19", faturamento: 0 },
  { dia: "2024-09-20", faturamento: 310 },
  { dia: "2024-09-21", faturamento: 0 },
  { dia: "2024-09-22", faturamento: 160 },
  { dia: "2024-09-23", faturamento: 0 },
  { dia: "2024-09-24", faturamento: 220 },
  { dia: "2024-09-25", faturamento: 0 },
  { dia: "2024-09-26", faturamento: 290 },
  { dia: "2024-09-27", faturamento: 0 },
  { dia: "2024-09-28", faturamento: 300 },
  { dia: "2024-09-29", faturamento: 0 },
  { dia: "2024-09-30", faturamento: 330 },
];

function calcularFaturamento(dados) {
  let totalFaturamento = 0;
  let numDiasComFaturamento = 0;
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;

  for (let dado of dados) {
    if (dado.faturamento > 0) {
      totalFaturamento += dado.faturamento;
      numDiasComFaturamento++;

      if (dado.faturamento < menorFaturamento) {
        menorFaturamento = dado.faturamento;
      }

      if (dado.faturamento > maiorFaturamento) {
        maiorFaturamento = dado.faturamento;
      }
    }
  }

  const mediaMensal =
    numDiasComFaturamento > 0 ? totalFaturamento / numDiasComFaturamento : 0;

  let diasAcimaDaMedia = 0;
  for (let dado of dados) {
    if (dado.faturamento > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

function processarFaturamento() {
  try {
    const resultados = calcularFaturamento(faturamentoDados);

    console.log(
      "O menor valor de faturamento ocorrido em um dia do mês:",
      resultados.menorFaturamento
    );
    console.log(
      "O maior valor de faturamento ocorrido em um dia do mês:",
      resultados.maiorFaturamento
    );
    console.log(
      "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:",
      resultados.diasAcimaDaMedia
    );
  } catch (error) {
    console.error("Erro ao processar os dados:", error);
  }
}

processarFaturamento();
