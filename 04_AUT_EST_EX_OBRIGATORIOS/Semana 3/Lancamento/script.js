function receberdado(){
var V0 = Number(document.getElementById('V0').value)
const G = 10
var tempo = V0 / G
var velocidademaxima = (V0**2)/(G*2)

document.getElementById('result').innerHTML = tempo;
document.getElementById('result2').innerHTML = velocidademaxima;
}