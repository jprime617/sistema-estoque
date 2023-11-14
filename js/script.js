var Estoque = []
var EstoqueQuant = []
var ProdAtual = 0




function Add(){
    var produto = document.getElementById("idProds").value
    var n = document.getElementById("IdNumbs").value
    if (produto == "" || n == ""){
        return alert("Você precisa preencher as caixas para poder adicionar algo!")
    }

    EstoqueQuant.push(n)
    Estoque.push(produto)

    const botao = document.createElement("button");
    botao.id = ProdAtual;
    botao.innerHTML = "Apagar";
    botao.setAttribute("onclick","Remove()")
    botao.setAttribute("class","buttonRemover")
    document.body.appendChild(botao);

    const botaoMais = document.createElement("button")
    botaoMais.id = "mais" + ProdAtual
    botaoMais.innerHTML = "Mudar";
    botaoMais.setAttribute("onclick","Mudar()")
    botaoMais.setAttribute("class","buttonMudar")
    document.body.appendChild(botaoMais);

    var divNova = document.createElement("div");
    divNova.id = ("texto" + ProdAtual)
    conteudoNovo = document.createTextNode(Estoque[ProdAtual] + "; Qnt: " + EstoqueQuant[ProdAtual]);
    divNova.appendChild(conteudoNovo)
    divNova.setAttribute("class","TextoProduto")

   /* var texto = document.createElement("p")
    texto.id = ("texto" + ProdAtual)
    texto.innerHTML = Estoque[ProdAtual] + "; Qnt: " + EstoqueQuant[ProdAtual]*/

    var divAtual = document.getElementById("mostruario");
    document.body.insertBefore(divNova, divAtual);
    document.body.insertBefore(botao, divNova);
    document.body.insertBefore(botaoMais, divNova);
    divNova.classList.add("mostruario")
    
    ProdAtual ++
}


function Remove(){
    var idAtual = event.currentTarget.id
    const div2 = document.getElementById(event.currentTarget.id);
    const div3 = document.getElementById("texto" + idAtual)
    const div4 = document.getElementById("mais" + idAtual)
    const div5 = document.getElementById("caixa" + idAtual)
    div2.remove();
    div3.remove()
    div4.remove() 
    div5.remove()
}

function Mudar(){
    const caixa = document.createElement("input");
    const confirm = document.createElement("button");
    const divNova = document.getElementById(event.currentTarget.id)
    const idBotao = event.currentTarget.id
    const idAtual = idBotao.slice(4)
    caixa.id = "caixa" + idAtual;
    confirm.id = "confirm" + idAtual
    confirm.setAttribute("onclick","Comfirmar()")
    confirm.innerHTML = "Confirmar"
    confirm.setAttribute("class","comfirmar")
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
    const idBotao = event.currentTarget.id
    const idAtual = idBotao.slice(7)
    var mudanca = document.getElementById("caixa" + idAtual).value
    if (mudanca == ""){
        return alert("Você precisa preencher a caixa para poder adicionar algo!")
    }
    var divNova = document.getElementById("texto" + idAtual)

    const div1 = document.getElementById("confirm" + idAtual);
    const div2 = document.getElementById("caixa" + idAtual)
    
    divNova.textContent = Estoque[idAtual] + "; Qnt: " + mudanca
   
    div1.remove();
    div2.remove()
    
    
}




