var input = require('fs').readFileSync('stdin.txt', 'utf8');
var valores = input.split('\n');

function main() {
    let result = verificaIntervalo(valores[0]);
    console.log(result)

}

function verificaIntervalo(valores) {
    let intervalo
    if (parseFloat(valores) >= 0 && parseFloat(valores) <= 25) {
        intervalo = `Intervalo [0,25]`;
        return intervalo
    }
    if (parseFloat(valores) > 25 && parseFloat(valores) <= 50) {
        intervalo = `Intervalo (25,50]`;
        return intervalo
    }
    if (parseFloat(valores) > 50 && parseFloat(valores) <= 75) {
        intervalo = `Intervalo (50,75]`;
        return intervalo
    }
    if (parseFloat(valores) > 75 && parseFloat(valores) <= 100) {
        intervalo = `Intervalo (75,100]`;
        return intervalo
    } else
        return `Fora de intervalo`

}

main();

