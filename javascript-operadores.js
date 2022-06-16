console.log(comparaNumeros(30, 15));
function comparaNumeros(num1, num2){
    if(!num1 || !num2) return 'Defina dois números';

    let arrayRetorno = [];
    let soma = num1 + num2;

    num1 === num2 ? arrayRetorno.push('são') : arrayRetorno.push('não são');
    soma > 10 ? arrayRetorno.push('maior') : arrayRetorno.push('menor');
    soma < 20 ? arrayRetorno.push('menor') : arrayRetorno.push('maior');

    return respostaValidacao = `Os números ${num1} e ${num2} ${arrayRetorno[0]} iguais. Sua soma 
    é ${soma}, que é ${arrayRetorno[1]} que 10 e ${arrayRetorno[2]} que 20.`;
}

