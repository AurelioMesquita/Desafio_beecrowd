var input = require('fs').readFileSync('stdin.txt', 'utf8');
var valores = input.split('\n');

function main(){
    let numero_casos = parseInt(valores[0]);
    for(let i = 1; i<=numero_casos;i++){
        let quantidade_Diamante = verificaDiamante(valores[i]);
        console.log(quantidade_Diamante);
    }
}


function verificaDiamante(diamantes){
	let numero_Diamante = 0;
	let inicioDiamante = -1;
	let fimDiamante = -1;
	
	if(diamantes.indexOf('>') != -1){
		for(let i=0;i<=diamantes.length;i++)  {
			if(diamantes[i]=='<'){
				inicioDiamante = i;
			}
			if(inicioDiamante != -1 && diamantes[i] == '>' ){
				fimDiamante = i;
				diamantes = diamantes.replace(diamantes.substring(inicioDiamante,fimDiamante+1),'');
				numero_Diamante++;
				inicioDiamante=-1;
				fimDiamante=-1;
				i=-1;
			}
		} 
		return numero_Diamante;  
	}
	return  0;
}
main();