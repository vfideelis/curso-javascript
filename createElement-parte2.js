function adicionaElemento(){
    for(let i=1; i<=5;i++){
        
        var caixaLabel = document.createElement("label");
        caixaLabel.innerText = "Digite um número"
        document.body.appendChild(caixaLabel);
    
        var caixaInput = document.createElement("input"); 
        document.body.appendChild(caixaInput);
    
        var espaco = document.createElement("br");
        document.body.appendChild(espaco);
    }
    

 
}