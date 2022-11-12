var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");

function main() {
  const linha = valores[0];
  for (let i = 1; i <= linha; i++) {
    const [qtdNos, prefixo, infixo] = valores[i].split(" ");
    console.log(qtdNos, prefixo, infixo);
    let posfixa = descobrePosfixa(qtdNos, prefixo, infixo);
    // console.log(posfixa);
  }
}

function descobrePosfixa(qtdNos,prefixo,infixo){
    
}

main();
