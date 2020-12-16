var mongoose = require('mongoose');
const schema = new mongoose.Schema({
    nombre: String,
    edad:Number,
    carrera:[
        {nombre:String,anio:Number}
    ],
  });
  const model = mongoose.model('personal', schema);
  module.exports=model;