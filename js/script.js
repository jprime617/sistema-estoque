var Estoque = []
var EstoqueQuant = []
var ProdAtual = 0

function Add(){
    var produto = prompt("Insira o nome do produto.")
    var n = prompt("Insira a quantidade")
    EstoqueQuant.push(n)
    Estoque.push(produto)
    
    var divNova = document.createElement("div");
    divNova.id = (ProdAtual + 1)
    var conteudoNovo = document.createTextNode(divNova.id + "-" + Estoque[ProdAtual] + "; Quantidade: " + EstoqueQuant[ProdAtual]);
    divNova.appendChild(conteudoNovo)
    var divAtual = document.getElementById("mostruario");
    document.body.insertBefore(divNova, divAtual);
    divNova.classList.add("mostruario")
    ProdAtual ++
}

function Remove(){
    var num = prompt("Qual o número do item que você deseja deletar?")
    const div2 = document.getElementById(num);
    div2.remove();
}

function Mudar(){
    
}
