var Estoque = []
var EstoqueQuant = []
var ProdAtual = 0

function Add(){
    var produto = document.getElementById("idProds").value
    var n = document.getElementById("IdNumbs").value
    EstoqueQuant.push(n)
    Estoque.push(produto)
    
    var divNova = document.createElement("div");
    var divButton = document.createElement("button")
    divNova.id = (ProdAtual + 1)
    divButton.id = ("Button" + ProdAtual)
    var conteudoNovo = document.createTextNode(divNova.id + "-" + Estoque[ProdAtual] + "; Qnt: " + EstoqueQuant[ProdAtual]);
    divNova.appendChild(conteudoNovo)
    var divAtual = document.getElementById("mostruario");
    document.body.insertBefore(divNova, divAtual);
    document.body.insertBefore(divButton, divAtual);
    divButton.classList.add("ButtonRemove")
    divNova.classList.add("mostruario")
    var elemento = document.getElementById("button" + ProdAtual)
    //var rect = elemento.getBoundingClientRect()
    //var x = rect.left
    //var y = rect.top
    //alert(x)
    //alert(y)
    //elemento.style.top = 
    ProdAtual ++
}

function Remove(){
    var num = prompt("Qual o número do item que você deseja deletar?")
    const div2 = document.getElementById(num);
    const div3 = document.getElementById("Button" + (num - 1));
    div2.remove();
    div3.remove()
}

function Mudar(){
    
}
function MudarCor(){
    let changeColor = document.getElementById('CoresPag').value
    document.body.style.backgroundColor = changeColor
}



