function calcular() {
    document.getElementById("resultado").innerHTML = ""

    let a = document.getElementById('nn1').value;
    let b = document.getElementById('nn2').value;

for(let i = a; i<=b; i++){

    let primo = 0;
    for (let x = 2; x < i; x++) {
    console.log("try")
      if(i % x == 0){
        primo++;
      }
    }

    if(primo==0){
      //vai mostra na tela os numeros primos um a um
        document.getElementById('resultado').innerHTML += i + "<br>"
    }
}

}