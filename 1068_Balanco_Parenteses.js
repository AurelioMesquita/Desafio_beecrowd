var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');
let abreParenteses = 0;
let fechaParenteses = 0;
let diferenca = 0
function main() {
    while (true) {
        let expressao = lines.shift()
        if (!expressao) break
        let correctIncorrect = verificaParenteses(expressao)
        console.log(correctIncorrect)
        abreParenteses = 0
        fechaParenteses = 0
        diferenca = 0

    }
}

function verificaParenteses(expressao) {
    for (let i = 0; i < expressao.length; i++) {
        if (expressao[i] == `(`) abreParenteses++
        if (expressao[i] == `)`) fechaParenteses++
        if (fechaParenteses > abreParenteses) { fechaParenteses = 0; diferenca++ }

    }
    return abreParenteses == fechaParenteses && abreParenteses > 0 && fechaParenteses > 0 && diferenca == 0 ? "correct" : "incorrect"
}

main();