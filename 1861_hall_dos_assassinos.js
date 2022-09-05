var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");
const assassino = [];
const assassinado = [];
const resultado = [];

function main() {
  console.log("HALL OF MURDERERS");
  while (valores.length > 0) {
    let linha = valores.shift();
    assassino.push(linha.split(" ")[0]);
    assassinado.push(linha.split(" ")[1]);
    if (valores.length == 0) {
      hall(assassino, assassinado);
    }
  }
}

function hall(assassino, assassinado) {
  assassino = assassino.filter((el) => {
    return el !== "";
  });
  assassinado = assassinado.filter((el) => {
    return el !== undefined;
  });
  while (assassino.length > 0) {
    let assassinoAtual = assassino[0];
    const quantidadeMatanca = assassino.filter((e) => {
      if (e == assassinoAtual) return true;
      else return false;
    }).length;

    let assassinoMorreu = assassinado.filter((e) => {
      if (e.trim() === assassinoAtual) return true;
    });

    if (quantidadeMatanca > 1) {
      var indice = assassino.indexOf(assassinoAtual);
      while (indice >= 0) {
        assassino.splice(indice, 1);
        indice = assassino.indexOf(assassinoAtual);
      }
    }
    if (assassinoMorreu.length == 0) {
      resultado.push({
        assassino: assassinoAtual,
        mortes: quantidadeMatanca,
      });
    }
    assassino.shift();
  }
  var res = exibicaoAssassinos(resultado);
  res.forEach((value) => {
    console.log(`${value.assassino} ${value.mortes}`);
  });
}

function exibicaoAssassinos(resultado) {
  return resultado.sort(function (a, b) {
    if (a.assassino < b.assassino) return -1;
    if (a.assassino > b.assassino) return 1;
    return 0;
  });
}

main();
