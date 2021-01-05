/*
    1- importar o express, o mongoosere o requiredir

    2- criar a variaval pra receber o express()

    3- conectar o banco de dados

    4- usr o requireDir pra não icar importando ele

    5- conectar as rotas

    6- passar a porta que sera usada

*/


const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')



// iniciando o app
const app = express();
//pra poder receber dados em formato json
app.use(express.json())
app.use(cors())

//iniciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/model')

//primeira rota
app.use('/api', require('./src/routes'))


app.listen(3001);