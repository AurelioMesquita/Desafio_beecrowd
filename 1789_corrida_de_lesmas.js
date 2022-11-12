var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");

function main() {
  while (valores.length > 0) {
    valores.shift();
    if (valores[0]) {
      let nivelLesma = verificaVelocidade(valores.shift());
      console.log(nivelLesma);
    }
  }
}

function verificaVelocidade(arrayLesmas) {
  arrayLesmas = arrayLesmas.split(" ");
  let maior = 0;
  for (let i = 0; i <= arrayLesmas.length; i++) {
    if (parseInt(arrayLesmas[i]) > maior) {
      maior = parseInt(arrayLesmas[i]);
    }
  }
  let resultado;
  maior >= 20
    ? (resultado = 3)
    : maior < 20 && maior > 10
    ? (resultado = 2)
    : (resultado = 1);
  return resultado;
}
main();
