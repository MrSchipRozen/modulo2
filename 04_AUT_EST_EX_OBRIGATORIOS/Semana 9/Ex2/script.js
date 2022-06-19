
function calcular() {
    
    let a = document.getElementById('nn1').value;  // pega o valor do nn1
    var c = a.split("");     // tira as virgulas do input
    var d = c.map(Number);   // organiza os numeros
    var total = 0
    
    
    for(let b=0 ; b < d.length; b++) {   // roda enquanto o valor de b for menor ao tamanho do array
        total += d[b]; // soma os valores de d cm o b do array
        document.getElementById('resultado').innerHTML = 'A soma dos seus numeros é: ' +total;
    }
    
    
}