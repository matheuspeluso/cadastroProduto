var listaProdutos = [];

document.addEventListener("DOMContentLoaded", function() {
    var botaoCadastrar = document.querySelector("#cadastrar");
    var seletorProdutos = document.querySelector("#produtos");

    botaoCadastrar.addEventListener("click", function(event) {
        event.preventDefault();

        let nomeProduto = document.querySelector("#nome_Produto").value;
        document.querySelector("#nome_Produto").value = "";
        let imagem = document.querySelector("#img").value;
        document.querySelector("#img").value = "";
        let informacao = document.querySelector("#info").value;
        document.querySelector("#info").value = "";
        let valorProduto = document.querySelector("#valor").value;
        document.querySelector("#valor").value = "";

        if (nomeProduto == "" || imagem == "" || informacao == "" || valorProduto =="" ){
            alert("Produto não cadastrado! Informção faltando!");
        }else{

            var item = document.createElement('div');
            item.classList.add('box');
            item.innerHTML = `
                <h5>${nomeProduto}</h5>
                <img src="${imagem}" alt="imagem do produto">
                <p>${informacao}</p>
                <span>R$${valorProduto}</span>
                <br>
                <input type="submit" value="Comprar">
            `;
    
            listaProdutos.push(item);
            seletorProdutos.appendChild(item); /*Se a linha seletorProdutos.appendChild(item); 
            não fosse adicionada, o elemento item criado não seria anexado ao elemento seletorProdutos 
            no DOM. Isso significa que o produto não seria exibido na página para o usuário. */
        }

    });
});
