var Estoque = []
var EstoqueQuant = []
var ProdAtual = 0
var mudarNum = 0



function Add(){
    var produto = document.getElementById("idProds").value
    var n = document.getElementById("IdNumbs").value
    EstoqueQuant.push(n)
    Estoque.push(produto)

    const botao = document.createElement("button");
    botao.id = ProdAtual;
    botao.innerHTML = "Apagar";
    botao.setAttribute("onclick","Remove()")
    document.body.appendChild(botao);

    const botaoMais = document.createElement("button")
    botaoMais.id = "mais" + ProdAtual
    botaoMais.innerHTML = "Mudar";
    botaoMais.setAttribute("onclick","Mudar()")
    document.body.appendChild(botaoMais);

    /*var divNova = document.createElement("div");
    divNova.id = ("texto" + ProdAtual)
    conteudoNovo = document.createTextNode(Estoque[ProdAtual] + "; Qnt: " + EstoqueQuant[ProdAtual]);
    divNova.appendChild(conteudoNovo)*/

    var texto = document.createElement("p")
    texto.id = ("texto" + ProdAtual)
    texto.innerHTML = Estoque[ProdAtual] + "; Qnt: " + EstoqueQuant[ProdAtual]

    var divAtual = document.getElementById("mostruario");
    document.body.insertBefore(texto, divAtual);
    document.body.insertBefore(botao, texto);
    document.body.insertBefore(botaoMais, texto);
    texto.classList.add("mostruario")
    
    ProdAtual ++
}


function Remove(){
    var idAtual = event.currentTarget.id
    const div2 = document.getElementById(event.currentTarget.id);
    const div3 = document.getElementById("texto" + idAtual)
    const div4 = document.getElementById("mais" + idAtual)
    div2.remove();
    div3.remove()
    div4.remove() 
}

function Mudar(){
    mudarNum++
    const caixa = document.createElement("input");
    const confirm = document.createElement("button");
    const divNova = document.getElementById(event.currentTarget.id)
    caixa.id = "caixa" + mudarNum;
    confirm.id = "confirm" + mudarNum
    confirm.setAttribute("onclick","Comfirmar()")
    confirm.innerHTML = "Confirmar"
    caixa.setAttribute("type","number")
    caixa.setAttribute("class","caixa")
    document.body.appendChild(caixa);
    document.body.insertBefore(caixa, divNova);
    document.body.appendChild(confirm);
    document.body.insertBefore(confirm, caixa);
}
function MudarCor(){
    let changeColor = document.getElementById('CoresPag').value
    document.body.style.backgroundColor = changeColor
}
function Comfirmar(){
    var mudanca = document.getElementById("caixa" + mudarNum).value
    //alert(mudanca)
    //alert(idAtual)
    const div1 = document.getElementById("confirm" + mudarNum);
    const div2 = document.getElementById("caixa" + mudarNum)

    document.getElementById("texto" + idAtual).innerHTML = Estoque[ProdAtual] + "; Qnt: " + mudanca
    div1.remove();
    div2.remove()
    
    
}




