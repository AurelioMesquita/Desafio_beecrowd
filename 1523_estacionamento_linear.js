var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");

async function main() {
  do {
    let possivelEstacionar = false;
    const linha = valores.shift();
    if (linha == "0 0") break;
    const numeroMotorista = linha.split("")[0];
    const maxEstacionamento = linha.split(" ")[1];
    const armazenaCarros = valores.slice(0, numeroMotorista);

    for (let i = 0; i < numeroMotorista; i++) {
      if (armazenaCarros.length > 0) {
        const horarios = armazenaCarros.shift().split(" ");
        console.log(horarios);
        possivelEstacionar = estacionamento(
          horarios[0],
          horarios[1],
          maxEstacionamento
        );
        if (!possivelEstacionar) break;
      }
    }
  } while (true);
}

function estacionamento(entrada, saida, maxEstacionamento) {}

main();
