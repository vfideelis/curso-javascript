 function somar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 + numero2;
    alert("O resultado da soma é = " +resultado);
    
 }
 function subtrair(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 - numero2;
    alert("O resultado da subtração é = " +resultado);

 }
 function multiplicar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 * numero2;
    alert("O resultado da multiplicação é = " +resultado);

 }
 function dividir(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 / numero2;
    alert("O resultado da divisão é = " +resultado);

 }

 function calcular (){
   let conta = document.getElementsByClassName("btnCalc")[0].innerHTML

   if (conta=="Somar"){
      let numero1 = parseInt(document.getElementById("num1").value);
      let numero2 = parseInt(document.getElementById("num2").value);
      let resultado = numero1 + numero2;
      alert("O resultado da soma é = " +resultado);
      
   }

   if(conta=="Subtrair"){
      subtrair();
   }
   
   if(conta=="multiplicar"){
      multiplicar();
   }

   if(conta=="dividir"){
      dividir();
   }
 }