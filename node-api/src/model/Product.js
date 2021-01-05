/**
 * 1- IMPORTAR O MONGOOSE, mongoosePaginate 
 * 
 * 2- INICIAR O A TABELA
 * 
 * 3- PASSSAR OS ATRIBUTOS
 * 
 * 4-EXPORTAR O SCHEMA (MONGOOSE.MODEL)
 */

const mongoose = require("mongoose")
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },

},
{
    timestamps:true
}
)
ProductSchema.plugin(mongoosePaginate)
mongoose.model('Product', ProductSchema);