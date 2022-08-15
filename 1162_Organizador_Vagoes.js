var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let quantidadeTestes = valores.shift();

for(let i = 0 ; i<quantidadeTestes ; i++){
    let contador= 0;
    let QdtMaximaVagoes = valores.shift();
    let testes = valores.shift();
    let arrayValores=testes.split(' ');
        for(let p = 0; p<QdtMaximaVagoes ;p++){
            for(let f=0 ; f< (QdtMaximaVagoes-p-1) ; f++){
                if(parseInt(arrayValores[f])>parseInt(arrayValores[f+1])){
                    let temp =  arrayValores[f];
                    arrayValores[f] = arrayValores[f+1];
                    arrayValores[f+1]= temp;
                    contador++;
                }
            }
        }
        console.log(`Optimal train swapping takes ${contador} swaps.`);
        
    }