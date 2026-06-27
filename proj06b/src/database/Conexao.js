import mongoose from "mongoose";
import "dotenv/config";

const endereco = process.env.MONGO_URI;

mongoose.connect(endereco)
    .then(function() {
        console.log("CONECTADO COM O BANCO DE DADOS!")
    })
    .catch(function(erro) {
        console.log("Erro ao conectar com o banco de dados:", erro.message)
    })