function calcular() {
    let a = document.getElementById('nn1').value;
    if(a > 0 ) {
    var fib = [] 
    fib[0]=1
    fib[1]=1
    for(let i = 2; i < a; i++){     //
      fib[i] = fib[i-1] + fib[i-2]
    }
    }
    document.getElementById('resultado').innerHTML = "Seu reseultado é : " + fib;

}
