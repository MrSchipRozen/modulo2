function verificarvalor(){

    var verificar = document.getElementById("valor1").value;
    var padrao = /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/;
    if (verificar.match(padrao)) {
       alert("O formato que voce botou está correto");
    }else {
        alert("O formato inserido não está correto , por favor use o formato informado de (XX)XXXXX-XXXX");
    }
}