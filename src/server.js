const { Console } = require('console');
//Importar dependenciaas
const express = require('express');
const path = require('path')
const pages = require('./pages.js')
//Iniciando express
const server =express()
    server
            //Utilizando os arquivos staticos
            .use(express.static('public'))
            //configurando template engine
            .set('views', path.join(__dirname,"views"))
            .set('view engine','hbs')
            //Criando uma rota
            .get('/', pages.index)
            .get('/orphanage', pages.orphanage)
            .get('/orphanages', pages.orphanages)
            .get('/create-orphanage', pages.createOrphanage)
//Liga o server
server.listen(5500)