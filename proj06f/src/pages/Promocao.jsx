import React from "react";

import Navegacao from "../components/Navegacao.jsx";
import Exibidor from "../components/Exibidor.jsx";

import ProdutosExemplo from "../datas/ProdutosExemplo.js";

export default function Promocao() {
    return (
        <>
            <Navegacao titulo="PROMOÇÕES">
                <a href="/"> Início </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>

            {
                ProdutosExemplo.map(function(produto, indice) {
                    if (produto.promocao == true) {
                        return <Exibidor key={ indice } produto={ produto } />
                    }
                })
            }
        </>
    )
}