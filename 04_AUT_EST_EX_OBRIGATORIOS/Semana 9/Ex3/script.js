
function calcular() {
    
    let a = document.getElementById('nn1').value;
    var c = a.split(",");  // split reconhece as virgulas
    c.sort();  // o sort é utilizado para ordenar em ordem alfabetica

    
    for (let i =0; i < c.length; i++) {  // roda o codigo enquanto for do 'length do array'
        document.getElementById('resultado').innerHTML = 'A ordem dos nomes é :' +c;
    } 

}