var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n\r");

function main() {
  alunos = [];
  while (true) {
    let alunosAtivos = valores.shift();
    for (let i = 1; i <= alunosAtivos; i++) {
      alunos.push({ alunos: valores[i] });
      valores.shift();
    }
    let retorno = aulas();
    if (retorno) break;
    console.log(valores);
  }
}
function aulas() {
  //   console.log(alunos);
  if (!alunos) return true;
}

main();
