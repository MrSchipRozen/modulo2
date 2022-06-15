
function calcular() {
    
    let a = document.getElementById('nn1').value;
    var c = a.split(",");
    c.sort();

    for (let i =0; i < c.length; i++) {
        document.getElementById('resultado').innerHTML = 'A ordem dos nomes é :' +c;
    } 

    // document.getElementById('resultado').innerHTML = 'A ordem dos nomes é :' +c;
}