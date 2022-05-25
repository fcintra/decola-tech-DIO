
// Buscando o elemento span = contador
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

    
    btnSubtrair.addEventListener('click', decrement)
    btnAcrescentar.addEventListener('click', increment)


//função para acrescentar ao contador
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


//função para subtrair no contador
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
    