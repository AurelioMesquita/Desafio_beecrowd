var input = require('fs').readFileSync('stdin.txt', 'utf8');
var valores = input.split('\n');
let anos = 0;
let meses = 0;
let dias = 0;


let idadeEmDias = parseInt(valores[0])

function main() {
    while (idadeEmDias > 0) {
        ano();
        mes();
        dia();

    }
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
}

function ano() {
    if (idadeEmDias >= 365) {
        idadeEmDias -= 365
        anos++;
    }
}
function mes() {
    if (idadeEmDias >= 30) {
        idadeEmDias -= 30
        meses++;
    }
}
function dia() {
    if (idadeEmDias >= 1) {
        idadeEmDias -= 1
        dias++;
    }
}

main()