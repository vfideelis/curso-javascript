console.log(
    document.getElementById("fruta")//captura somente o id
)
console.log(
    document.getElementsByClassName("carro")//captura todas as classes
)
console.log(
    document.getElementsByClassName("carro")[0].innerHTML//com a inserção do [0] e innerHTML, consigo acessar a primeira classe do documento
)
console.log(
    document.getElementsByClassName("carro")[1].innerHTML//com a inserção do [1] e innerHTML, consigo acessar a segunda classe do documento
)

console.log(
    document.getElementsByTagName("div")//captura todas as tags, independente das classes e ids 
)

console.log(
    document.querySelector("div")//ele seleciona a primeira tag
)

console.log(
    document.querySelector(".carro")//ele pega a primeira classe
)

