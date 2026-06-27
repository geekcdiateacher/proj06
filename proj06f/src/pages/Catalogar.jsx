import React, { useState } from "react";

import Formulario from "../components/Formulario.jsx";
import Navegacao from "../components/Navegacao.jsx";
import ProdutoInicial from "../datas/ProdutoInicial.js";

export default function Catalogar() {
    return (
        <>
            <Navegacao titulo="CATALOGAR">
                <a href="/"> Inicio </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>

            <Formulario>
                
            </Formulario>
        </>
    )
}