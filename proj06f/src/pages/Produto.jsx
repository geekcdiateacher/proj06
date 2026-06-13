import React from "react";
import { useParams } from "react-router-dom";

import Navegacao from "../components/Navegacao.jsx";
import Exibidor from "../components/Exibidor.jsx";

import ProdutosExemplo from "../datas/ProdutosExemplo.js";

export default function Produto() {
    const { codigo } = useParams()
    const produtoEncontrado = ProdutosExemplo.find((produto) => produto.codigo == codigo) || {}

    return (
        <>
            <Navegacao titulo="PRODUTO">
                <a href="/"> Início </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>

            <Exibidor produto={produtoEncontrado} />
        </>
    )
}