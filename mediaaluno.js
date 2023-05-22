function calcular(){
   let nome = document.getElementById("nome").value;
   let nota1 = parseFloat(document.getElementById("nota1").value);
   let nota2 = parseFloat(document.getElementById("nota2").value);
  
   let media = (nota1 + nota2 ) / 2;

   let resultado = document.getElementById("resultado");
    
    resultado.innerHTML = nome + ", sua média é " + media.toFixed(2);
    
    if(media >= 7) {
        resultado.innerHTML += " Parabéns, você está aprovado!";
    } else if(media >= 5) {
        resultado.innerHTML += " Você ficou de recuperação.";
    } else {
        resultado.innerHTML += " Infelizmente você está reprovado.";
    }
}
