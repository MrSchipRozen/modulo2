valortotal = 0

function calcular() {
    var pessoas = document.getElementById ('valor').value;
    if (document.getElementById("periodo").value =='day' && pessoas <50) {
    valortotal = pessoas*200
    document.getElementById('resultado').innerHTML = 'Seu valor total é de: ' + valortotal }
    else if (document.getElementById("periodo").value =='day' && pessoas >= 50){
        valortotal = (pessoas*200)*0.6
        document.getElementById('resultado').innerHTML = 'Seu valor total é de: ' + valortotal
    }
    else if (document.getElementById("periodo").value =="night" && pessoas <50) {
        valortotal = pessoas*100
        document.getElementById('resultado').innerHTML = 'Seu valor total é de: ' + valortotal
    }
    else if (document.getElementById("periodo").value =="night" && pessoas >=50) {
        valortotal = (pessoas*100)*0.8
        document.getElementById('resultado').innerHTML = 'Seu valor total é de: ' + valortotal
    }
}  