
function calcular() {
    
    let a = document.getElementById('nn1').value;
    var c = a.split("");
    var d = c.map(Number);
    var total = 0
    
    
    for(let b=0 ; b < d.lenght; b++) {
        total += d[b]; 

    }
    
    console.log(total)
    
}