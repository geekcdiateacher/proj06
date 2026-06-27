import React, { useState, useEffect } from "react";

import Navegacao from "../components/Navegacao.jsx";
import Janela from "../components/Janela.jsx";

import ObterCarrinho from "../functions/ObterCarrinho.js";
import Pagamento from "../functions/Pagamento.js";
import ProdutosExemplo from "../datas/ProdutosExemplo.js";

export default function Carrinho() {
    const [carrinho, definirCarrinho] = useState([]);
    const [preco, definirPreco] = useState(0);

    useEffect(function () {
        const resultado = ObterCarrinho();
        definirCarrinho(resultado);
    }, [])

    useEffect(function () {
        var total = 0
        carrinho.map(function (codigo) {
            for (const produto of ProdutosExemplo) {
                if (produto.codigo == codigo) {
                    total += parseInt(produto.preco)
                }
            }
        })
        definirPreco(total)
    }, [ProdutosExemplo, carrinho])
    
    return (
        <>
            <Navegacao titulo="CARRINHO">
                <a href="/"> Início </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>

            <Janela>
                <h1>Total R$ {preco},00</h1>
                <table width="100%">
                    <tbody>
                        <tr>
                            <th>Código</th>
                            <th>Modelo</th>
                            <th>Preço</th>
                        </tr>
                        {ProdutosExemplo.length > 0 &&
                            carrinho.map(function (codigo, indice) {
                                for (const produto of ProdutosExemplo) {
                                    if (produto.codigo == codigo) {
                                        <tr key={indice}>
                                            <td> {produto.codigo} </td>
                                            <td> {produto.modelo} </td>
                                            <td> R$ {produto.preco},00 </td>
                                        </tr>
                                    }
                                }
                            })
                        }
                    </tbody>
                </table>
                <br/>
                <button onClick={Pagamento}> Pagamento por Pix </button>
            </Janela>
        </>
    )
}