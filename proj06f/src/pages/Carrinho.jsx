import React from "react";

import Navegacao from "../components/Navegacao.jsx";
import Janela from "../components/Janela.jsx";

export default function Carrinho() {
    return (
        <>
            <Navegacao titulo="CARRINHO">
                <a href="/"> Início </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>

            <Janela>
                <h1>Total R$ 1000,00</h1>
                <table width="100%">
                    <tbody>
                        <tr>
                            <th>Código</th>
                            <th>Modelo</th>
                            <th>Preço</th>
                        </tr>
                    </tbody>
                </table>
            </Janela>
        </>
    )
}