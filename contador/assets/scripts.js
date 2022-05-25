
// Buscando o elemento span = contador
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var btnSubtrair = document.getElementById('subtrair');
var btnAcrescentar = document.getElementById('acrescentar');

var verificaCurrentNumber = parseInt(currentNumberWrapper.textContent)


//função para acrescentar ao contador
function increment(){
    let verificaCurrentNumber = parseInt(currentNumberWrapper.textContent)
    console.log(verificaCurrentNumber)
    if(verificaCurrentNumber >= 10 - 1){
        btnAcrescentar.disabled = true;
    }else{
        btnAcrescentar.disabled = false;
    }

    currentNumber = currentNumber + 1;

    currentNumberWrapper.innerHTML = currentNumber;
}


//função para subtrair no contador
function decrement(){
    let verificaCurrentNumber = parseInt(currentNumberWrapper.textContent)

    console.log(verificaCurrentNumber)
    if(verificaCurrentNumber <= 1){
        console.log('menor que 0')
        btnSubtrair.disabled = true;
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
    if(verificaCurrentNumber >= 0){
        btnSubtrair.disabled = false
        btnSubtrair.addEventListener('click', decrement)

    }
    btnAcrescentar.addEventListener('click', increment)

console.log(typeof verificaCurrentNumber)