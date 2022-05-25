
// Buscando o elemento span = contador
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var btnSubtrair = document.getElementById('subtrair');
var btnAcrescentar = document.getElementById('acrescentar');


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


//utilizando o addEventListener
console.log(currentNumberWrapper.textContent)

if(currentNumberWrapper.textContent < 0){
    console.log(currentNumberWrapper.textContent)
    btnSubtrair.disabled = true;
}else if(currentNumberWrapper > 10){
    btnAcrescentar.disabled = true;
}else{

    btnSubtrair.disabled = false;
    btnAcrescentar.disabled = false;

    btnSubtrair.addEventListener('click', decrement)
    btnAcrescentar.addEventListener('click', increment)
}

console.log(typeof currentNumberWrapper)