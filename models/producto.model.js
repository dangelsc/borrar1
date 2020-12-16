var monoose = require('mongoose');
const mongoose = require('./conexion');
const schema = new mongoose.Schema({
    nombre:String,
    precio:Number,
    descripcion:String,
    categoria:String,
    estado:Boolean
},{
    collection:'producto'
});
const model = mongoose.model('producto',schema);
module.exports = model;