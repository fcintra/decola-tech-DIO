console.log(isPalindromo('aarara'))


function isPalindromo(word){
    if(!word) return 'Digite uma palavra válida!';
    let wordVerify = word.split("").reverse().join("");
   return wordVerify == word ? `A palavra ${word} é um palindromo` : `A palavra ${word} não é um palindromo`;
}