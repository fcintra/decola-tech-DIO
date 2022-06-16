const BTN_UPDATE = document.getElementById('mode-selector')
BTN_UPDATE.addEventListener('click', () => {
    validacao();

    var collection = buscaElementos();    
    for (let i = 0; i < collection.length; i++) {
      collection[i][0].classList.toggle('dark-mode');
    }
   
});

function buscaElementos(){
  var arr = [];
  arr.push(document.getElementsByTagName('h1'));

  arr.push(document.getElementsByTagName('button'));

  arr.push(document.getElementsByTagName('footer'));

  arr.push(document.getElementsByTagName('body'));

  return arr
}


function validacao(){
  var btnText = document.getElementById('mode-selector');
  var h1Text = document.getElementById('page-title');
  var modoAplicado = h1Text.classList.contains("dark-mode");

   if(!modoAplicado){
    h1Text.innerHTML = 'Dark Mode ON';
    btnText.innerHTML = 'Light Mode';
    return;
   }
    h1Text.innerHTML = 'Light Mode ON';
    btnText.innerHTML = 'Dark Mode';
   
  
}