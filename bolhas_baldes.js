var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");
let contador = 0;

async function main() {
  let i = 0;
  while (valores[i] != 0) {
    let vencedor = await verificaVencedor(valores[i].split(""));
    vencedor % 2 == 0 ? console.log("Carlos") : console.log("Marcelo");
    i++;
    contador = 0;
  }
}

async function verificaVencedor(jogada) {
  let qtdTestes = jogada.shift();
  for (let i = 0; i < qtdTestes; i++) {
    for (let f = 0; f < qtdTestes - 1; f++) {
      if (parseInt(jogada[f]) > parseInt(jogada[f + 1])) {
        let temp = jogada[f];
        jogada[f] = jogada[f + 1];
        jogada[f + 1] = temp;
        contador++;
      }
    }
  }
  if (!ordenacao(jogada)) return contador;
  else return verificaVencedor(jogada);
}

function ordenacao(jogada) {
  for (let i = 0; i < jogada[0]; i++) {
    if (jogada[i] > jogada[i + 1]) {
      return false;
    }
  }
  return true;
}

main();
