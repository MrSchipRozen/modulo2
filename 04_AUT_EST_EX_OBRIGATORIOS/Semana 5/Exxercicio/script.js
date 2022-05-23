function CalcAndShow(x,y){
    
    let val1 = parseInt(document.getElementById("number1").value);
    
    let val2 = parseInt(document.getElementById("number2").value);
    
    let op = document.getElementById("op").value;
    
    let result = Calcu(val1, val2, op);

    document.getElementById("tempo").innerHTML = result;


}

function Calcu(x, y, op){
    let resultado;
    resultado = eval(x + op + y) 
    return resultado;
};


function caixa() 

{
    let valorTotal = document.getElementById('valor').value;
    
    let notasDecem = parseInt(valorTotal / 100);
    valorTotal = valorTotal % 100
    
    let notasdeCinquenta = parseInt(valorTotal / 50);
    valorTotal = valorTotal % 50
    
    let notasdevinte = parseInt(valorTotal / 20);
    valorTotal = valorTotal % 20
    
    let notasDeDez = parseInt(valorTotal / 10);
    valorTotal = valorTotal % 10
    
    let notasDeCinco = parseInt(valorTotal / 5);
    valorTotal = valorTotal % 5
    
    let notasdeDois = parseInt(valorTotal / 2);
    valorTotal = valorTotal % 2
    
    let notasDeUm = parseInt(valorTotal / 1);
    valorTotal = valorTotal % 1
    
    // var moedasdecinquenta = (valorTotal / 1/2);
    // valorTotal = valorTotal / 1/2;

    // var moedasdevintecinco = (valorTotal / 1/2);
    // valorTotal = valorTotal % 1/4

    // console.log(moedasdevintecinco);
    // console.log(moedasdecinquenta);

    console.log(notasDecem);
    console.log(notasdeCinquenta);
    console.log(notasdevinte);
    console.log(notasDeDez);
    console.log(notasDeCinco);
    console.log(notasdeDois)
    console.log(notasDeUm);
    document.getElementById('recebe').innerHTML = 'RESULTADO: notas de 100: ' + notasDecem + '  notas de 50: ' + notasdeCinquenta + '  notas de 20: ' + notasdevinte + '  notas de 10: ' + notasDeDez + '  notas de 5: ' + notasDeCinco +
    '  notas de dois: ' + notasdeDois + '  notas de 1: ' + notasDeUm;
    
    // + ' moedas de 50 centavos: ' + moedasdecinquenta + ' moedas de vinte e cinco centavos: ' + moedasdevintecinco

}

