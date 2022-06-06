function adicionar() {
    var numero = Number(document.getElementById('valor').value);
    numero +=1;
    document.getElementById('valor').value = numero;
    document.getElementById('resultado').innerHTML = " ";
        
    

}

function subtrair() {
    var numero = Number(document.getElementById('valor').value);
    if (numero > 0) {
        numero -=1,0; ;  
        document.getElementById('valor').value = numero;
    }
    if (numero == 0) {
        document.getElementById('resultado').innerHTML = "Por favor para de tentar , nao existe quantidade de produto inferior a zero";
        
    }
}
