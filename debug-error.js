


function validaErros(array, number){
    try{
        if(!array && !number) throw new ReferenceError('Os parâmetros não foram enviado corretamente');

        if(typeof array !== 'object') throw new TypeError('o array não é do tipo object');

        if(typeof number !== 'number') throw new TypeError('o segundo argumento não é do tipo numero');

        if(array.length !== number) throw new RangeError('O tamanho do array é diferente do segundo argumento informado');

        return array
    }catch(e){
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
    }
}

console.log(validaErros([1,2,3,4], 6))
