var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');





function main(){
    let quantidadeCasoTestes = valores.shift();
    for(let f=0;f<quantidadeCasoTestes;f++){
        let casosTestes = valore.shift();
        casosTestes =casosTestes.split('')
        console.log(casosTestes)
        // casosTestes = casosTestes.replace(/\s+/g, ' ')
        // if(casosTestes!==" "){
            
        //     let primeiroIten=casosTestes.indexOf('<')
        //     let segundoItem=casosTestes.indexOf('>')
        //     const Diamante = casosTestes.substring(primeiroIten,segundoItem+1)
        //     console.log(Diamante)   
        // }
        
    
    }

}

main();