function calcular() {
    document.getElementById("resultado").innerHTML = ""  // declara o resultado vazio para limpar o campo quando rodar o codigo denovo

    let a = document.getElementById('nn1').value;  // declara que o valor de a vai ser igual ao input nn1 
    let b = document.getElementById('nn2').value;  // declara que o valor de b vai ser igual ao input nn2

for(let i = a; i<=b; i++){  //um loop que vai rodar enquanto o valor de i(a) for menor que b, e toda vez que rodar adiciona 1

    let primo = 0; // declara a variavel primo a zero
    for (let x = 2; x < i; x++) {  // começa em dois e roda se o valor de i for maior que dois
      if(i % x == 0){  // cria uma condição dentro do for que se o valor do resto da divisão de i com x for igual a 0 rodar primo++
        primo++;
      }
    }

    if(primo==0){
      //vai mostra na tela os numeros primos um a um com um espaço entre eles
        document.getElementById('resultado').innerHTML += i + "<br>"
    }
}

}