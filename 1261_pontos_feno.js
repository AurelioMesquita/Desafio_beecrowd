const { text } = require("stream/consumers");

var input = require("fs").readFileSync("stdin.txt", "utf8");
var valores = input.split("\n");
let CargoDescricao = [];
let descricao = [];

function main() {
    const [quantidadeCargo, quantidadeDescricao] = valores[0].split(" ");
    valores.shift();
    armazenaDadosCargo(quantidadeCargo)
    armazenaDescricao(quantidadeDescricao)


}

function armazenaDadosCargo(quantidadeCargo) {
    for (let i = 0; i < parseInt(quantidadeCargo); i++) {
        let [posicao, salario] = valores[0].split(" ");
        valores.shift()
        CargoDescricao.push({ cargo: posicao, salario: parseInt(salario) })
    }
}

function armazenaDescricao(quantidadeDescricao) {
    for (let i = 0; i < parseInt(quantidadeDescricao); i++) {
        let texto = ''
        while (true) {
            let linha = valores[0];
            if (!linha) break
            console.log(linha.trim(), 'oi')
            console.log(typeof linha.trim())
            if (linha.trim().indexOf(".") > 0) break
            texto = texto + valores[0] + " "
            valores.shift()

        }
        console.log('saiu')
        descricao.push(texto)

    }
    console.log(descricao)
}

main();