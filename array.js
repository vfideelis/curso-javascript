
var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite seu nome");
    if(nome==""|| nome== null){
        alert("Por favor preencher os campos vazios");
        area.innerHTML = "click no botão para acessar: "

    }else{
        area.innerHTML = "Bem Vindo "+nome
    }
}
    var arrayG = new Array(5);
    arrayG[0] =parseInt(document.getElementById("numero1")).value;
    arrayG[1] =parseInt(document.getElementById("numero2")).value;
    arrayG[2] =parseInt(document.getElementById("numero3")).value;
    arrayG[3] =parseInt(document.getElementById("numero4")).value;
    arrayG[4] =parseInt(document.getElementById("numero5")).value;

    var arrayH = new Array(6);
    arrayH[0] =parseInt(document.getElementById("numero1")).value;
    arrayH[1] =parseInt(document.getElementById("numero2")).value;
    arrayH[2] =parseInt(document.getElementById("numero3")).value;
    arrayH[3] =parseInt(document.getElementById("numero4")).value;
    arrayH[4] =parseInt(document.getElementById("numero5")).value;
    arrayH[5] =parseInt(document.getElementById("numero6")).value;

    var arrayI = new Array(11);
    arrayI[0] = arrayG[0]
    arrayI[1] = arrayG[1]
    arrayI[2] = arrayG[2]
    arrayI[3] = arrayG[3]
    arrayI[4] = arrayG[4]
    arrayI[5] = arrayG[0]
    arrayI[6] = arrayG[1]
    arrayI[7] = arrayG[2]
    arrayI[8] = arrayG[3]
    arrayI[9] = arrayG[4]
    arrayI[10] = arrayG[5]
   
        function mostrarNumero(){
            document.getElementById("resultado1").value = arrayI[0];
            document.getElementById("resultado2").value = arrayI[1];
            document.getElementById("resultado3").value = arrayI[2];
            document.getElementById("resultado4").value = arrayI[3];
            document.getElementById("resultado5").value = arrayI[4];
            document.getElementById("resultado6").value = arrayI[5];
            document.getElementById("resultado7").value = arrayI[6];
            document.getElementById("resultado8").value = arrayI[7];
            document.getElementById("resultado9").value = arrayI[8];
            document.getElementById("resultado10").value = arrayI[9];
            document.getElementById("resultado11").value = arrayI[10];

        }


        


















        
// var notas = new Array(5);
// notas[0] = 8.5;
// notas[1] = 5.0;
// notas[2] = 10;
// notas[3] = 9.0;
// notas[4] = 4.5;
// document.write("Notas: " +notas[0]+ ","+notas[1]+ "e"+notas[2]);

// diaSemana1 = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado")

// document.write("<br>Na semana seguinte teremos aulas da google cloud na "+diaSemana1[3]+" e "+diaSemana1[4]);

// var arrayA = new Array(5);
// arrayA[0]=parseInt(prompt("Digite o 1 número"));
// arrayA[1]=parseInt(prompt("Digite o 2 número"));
// arrayA[2]=parseInt(prompt("Digite o 3 número"));
// arrayA[3]=parseInt(prompt("Digite o 3 número"));
// arrayA[4]=parseInt(prompt("Digite o 5 número")); 

// // console.log(arrayA);

var arrayB = new Array(5);
arrayB[0] = arrayA[0]*arrayA[0];
arrayB[1] = arrayA[1]*arrayA[1];
arrayB[2] = arrayA[2]*arrayA[2];
arrayB[3] = arrayA[3]*arrayA[3];
arrayB[4] = arrayA[4]*arrayA[4];
document.write("<br>"+arrayB+"<br>");

var arrayC = new Array(5)
// arrayC[0]=parseInt(prompt("Digite o 1 numero do arrayA"));
// arrayC[1]=parseInt( prompt("Digite o 1 numero do arrayA"));
// arrayC[2]=parseInt(prompt("Digite o 1 numero do arrayA"));
// arrayC[3]=parseInt(prompt("Digite o 1 numero do arrayA"));
// arrayC[4]=parseInt(prompt("Digite o 1 numero do arrayA")); 
document.write("<br>"+arrayC+"<br>");

var arrayD = new Array(5)
// arrayD[0]=parseInt( prompt("Digite o 1 número do arrayB"));
// arrayD[1]=parseInt( prompt("Digite o 1 número do arrayB"));
// arrayD[2]=parseInt( prompt("Digite o 1 número do arrayB"));
// arrayD[3]=parseInt( prompt("Digite o 1 número do arrayB"));
// arrayD[4]=parseInt( prompt("Digite o 1 número do arrayB"));
// document.write("<br>"+arrayD+"<br>");

var arrayE = new Array(10) 
arrayF[0]= array

// document.write("<br>"+arrayB[0]+"<br>")
// document.write(arrayB[1]+"<br>")
// document.write(arrayB[2]+"<br>")
// document.write(arrayB[3]+"<br>")
// document.write(arrayB[4]+"<br>")


// document.write(arrayA[0]+"<br>");
// document.write(arrayA[1]+"<br>");
// document.write(arrayA[2]+"<br>");
// document.write(arrayA[3]+"<br>");
// document.write(arrayA[4]+"<br>");



// diaSemana = new Array(7);
// diaSemana[0] = "Domingo"
// diaSemana[1] = "Segunda-feira"
// diaSemana[2] = "Terça-feira"
// diaSemana[3] = "Quarta-feira"
// diaSemana[4] = "Quinta-feira"
// diaSemana[5] = "Sexta-feira"
// diaSemana[6] = "Sabado"

// document.write("Hoje é"+diaSemana[2]);

// nomes = new Array[10];
// nomes[0] = "Ana Carolina"
// nomes[1] = "Pedro josé"


// document.write(nomes[1].substring(6,10));