arrayExemplo = [1, 3, 4, 6, 80, 33, 23, 90, 0]

console.log(verificaNumbersArray(arrayExemplo))


function verificaNumbersArray(arrayExemplo){
    if(arrayExemplo.length === 0) return -1;
    
    const numberPar = (number) => number % 2 === 0;
    const numberNotZero = (number) => number !== 0;

    for(i = 0; i < arrayExemplo.length; i++){
        if(numberPar(arrayExemplo[i]) && numberNotZero(arrayExemplo[i])){
            console.log(`${arrayExemplo[i]} sendo trocado por 0`);
            arrayExemplo[i] = 0
        }else if(!numberNotZero(arrayExemplo[i])){
            console.log(`${arrayExemplo[i]} Você já vale zero`);
        }
    }
    return arrayExemplo;
}