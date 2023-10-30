const { DataTypes } = require('sequelize')
const db = require('..') // Falta linkar as configurações do banco de dados

//Tabela de cadastro do cliente ( campos da tela de cadastro)
const Cliente = db.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    sobrenome: {
        type: DataTypes.STRING,
        required: true
    },
    cpf: {
        type: DataTypes.STRING,
        required: true
    },
    rg: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    senha: {
        type: DataTypes.STRING,
        required: true
    },
    endereco: {
        type: DataTypes.STRING,
        required: true
    },
    complemento: {
        type: DataTypes.STRING,
        required: true
    },
    cidade: {
        type: DataTypes.STRING,
        required: true
    },
    estado: {
        type: DataTypes.STRING,
        required: true
    },
    cep: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Cliente