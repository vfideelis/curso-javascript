// var i = 0;
// document.write(i+"<br>");
// i = 1;
// document.write(i+"<br>");
// i = 2;
// document.write(i+"<br>");
// i = 3;
// document.write(i+"<br>");
// i = 4;
// document.write(i+"<br>");
// i = 5;
// document.write(i+"<br>");
// i = 6;
// document.write(i+"<br>");
// i = 7;
// document.write(i+"<br>");
// i = 8;
// document.write(i+"<br>");
// i = 9;
// document.write(i+"<br>");



// for (let i = 0; i <= 100; i++) {
//     document.write("Este numero é = "+i+"<br>")

// }

// for (let i = 15; i <=200; i++) {
//     document.write("O quadrado de "+i+" = "+i*i+"<br>");
// }

let soma = 0;
for (i=0;i<=500;i++){//inicio do for
    let verifica = i%2;
    if(verifica==0){//inicio do if
        soma = soma + i;
    }//fim do if
}//fim do for
document.write("<br>O resultado dos números pares = "+soma);

