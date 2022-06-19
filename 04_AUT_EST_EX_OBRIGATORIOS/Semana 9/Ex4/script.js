function calcular() {
    let a = document.getElementById('nn1').value;
    if(a > 0 ) {  // cria uma condição que só acontece caso o valor de a seja maior que zero
    var fib = []  //declara a variavel fib a um array vazio
    fib[0]=1  // indica que o valor da posição zero no array é 1 
    fib[1]=1  // indica que o valor da primeira posição no array é 1 
    for(let i = 2; i < a; i++){     // o valor de i ja começa em 2 por conta da sequencia de fib
      fib[i] = fib[i-1] + fib[i-2]  // quando rodar vai repetir para fazer o que acontece na sequencia que é o numero mais o numero anterior, o anterior mais o sucessor dele por isso - 1 e -2  
    }
    }
    document.getElementById('resultado').innerHTML = "Seu reseultado é : " + fib; // mostra o resultado na tela html

}
