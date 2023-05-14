let quantidadeProduto = [0, 0]
let valorProduto = [50.00, 30.00]
let valorTotal = [0, 0]

function adicionarItem(item) {
    let quantidade = document.getElementById('quantidade' + item)
    let total = document.getElementById('total' + item)

    quantidadeProduto[item] += 1

    valorTotal[item] = Number.parseFloat(valorProduto[item]) * quantidadeProduto[item]

    quantidade.innerHTML = quantidadeProduto[item]
    total.innerHTML = valorTotal[item].toFixed(2)
    valorCompra()

}


function removerItem(item) {
    if(quantidadeProduto[item] > 0 ){
        let quantidade = document.getElementById('quantidade' + item)
        let total = document.getElementById('total' + item)

        quantidadeProduto[item] -= 1

        valorTotal[item] = Number.parseFloat(valorProduto[item]) * quantidadeProduto[item]

        quantidade.innerHTML = quantidadeProduto[item]
        total.innerHTML = valorTotal[item].toFixed(2)
        valorCompra()
    }else{
        alert('Adicione algum produto!')
    }

}

function valorCompra(){
    let valorTotalCompra = document.getElementById('valorTotalCompra')
    let valor = 0 

    for(item = 0 ; item < valorTotal.length ; item++){
        valor += valorTotal[item]

    }

    valorTotalCompra.innerHTML = valor.toFixed(2)


}