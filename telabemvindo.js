var area=document.getElementById('area')

function entrar(){
    var nome = prompt("Digite seu nome")

    if(nome === '' || nome === null){
        alert("Ops, algo deu errado!!!")
        area.innerHTML = "Clique no botão para acessar..."
    }
    else{ 
        area.innerHTML = "Bem Vindo " + nome + "<br><br>"
    }
    let botaoSair = document.createElement("button")
    botaoSair.innerHTML = "Sair da conta"
    botaoSair.onclick = sair
    area.appendChild(botaoSair)

}
function sair(){
    alert("Até mais!")
    area.innerHTML = "Você saiu!"
}

var exibeMensagem = function(){
    if(true) {
        var escopoFuncao = 'Escopo Função';
        let escopoBloco = "Escopo Bloco";

        console.log(escopoBloco);
    }
    console.log(escopoFuncao);
    console.log(escoloBloco);
}