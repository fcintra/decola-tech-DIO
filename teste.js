var numeroNatural = [2,5]
var variavelAuxiliar = [];
var soma = 0;


console.log(numeroNatural[1])
for (var i = Math.min(numeroNatural[0], numeroNatural[1]); numeroNatural[0] >= 0 && numeroNatural[1] >= 0 && i <= Math.max(numeroNatural[0], numeroNatural[1]); i++){
    variavelAuxiliar.push(i)
}


for(var i = 0; i < variavelAuxiliar.length; i++) {
	soma += variavelAuxiliar[i];
}

console.log(soma)