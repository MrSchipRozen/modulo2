function calcular() {
    let n1 = document.getElementById("nn1").value;

    console.log(n1)
    if (n1[0] % 2 ==0) {            //pega o resto da divisão do valor por 2 e se for igual a zero ele emite um alerta de par e caso nao seja emite um alerta de impar
        alert('seu numero é par')
    }else {
        alert('seu numero é impar')
    }
}