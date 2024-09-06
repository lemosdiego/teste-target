function inverterString() {
  const texto = document.getElementById("string").value;
  let resultado = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    resultado += texto[i];
  }

  document.getElementById(
    "resultado2"
  ).innerHTML = ` String invertida:  <span>${resultado}</span> ;
`;
}
