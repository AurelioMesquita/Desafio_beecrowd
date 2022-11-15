var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");
let armazena = [];
let retorna_carne = [];

function main() {
    let valor;
    while (true) {
        valor = valores.shift()
        if (!valor) break

        for (let i = 0; i < parseInt(valor); i++) {
            let [carne, validade] = valores[i].split(" ")
            armazena.push({ carne: carne.replace("\n", ""), validade: validade })

        }

        if (armazena.length > 0) {

            orderna(armazena)
            console.log(retorna_carne.toString().replaceAll(",", " "))
        }
        armazena = []
        retorna_carne = []
    }
}
function orderna(valores) {
    let aux = 0;
    let aux2 = 0;
    for (const valor of valores) {
        if (parseInt(valor.validade) > aux) {
            aux = valor.validade
            retorna_carne.push(valor.carne)

        } else if (parseInt(valor.validade) > aux2) {
            aux2 = valor.validade;
            retorna_carne.unshift(valor.carne)
        } else {
            let index = retorna_carne.indexOf(aux2);
            retorna_carne.splice(index + 1, 0, valor.carne)
        }
    }
    return retorna_carne

}


main();