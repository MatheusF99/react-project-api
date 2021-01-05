/*

    1- importar o express

    2- alocar a variavel

    3- passar a rota

    4- exportar o a variavel (module.exports)

*/


const express = require('express')
const routes = express.Router();

const ProductController = require('./controllers/productController')

routes.get("/products", ProductController.index)
routes.post("/products", ProductController.create)
routes.get("/products/:id", ProductController.read)
routes.put("/products/:id", ProductController.update)
routes.delete("/products/:id", ProductController.delete)

module.exports = routes;