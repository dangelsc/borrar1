var Personal = require('../models/personal.model');

var index=function(req,res,next){
    let x= new Personal({nombre:'tomas'});
    x.save((err,dato)=>{
        console.log(err);
        console.log(err);
    });
    //get ->url normal
    console.log("la edad=",req.query.edad);
    console.log("la nombre=",req.query.nombre);
    return res.render('./cliente/index',
    {
        nombre:req.query.nombre,
        edad:req.query.edad
    });    
}
var nuevo=function(req,res,next){
    //get ->url pretty
    console.log("la edad=",req.params.edad);
    console.log("la nombre=",req.params.nombre);
    return res.render('./cliente/nuevo/:edad',{
        nombre:req.params.nombre,
        edad:req.params.edad
    });    
}
var editar=function(req,res,next){
    return res.render('./cliente/nuevo');    
}
var borrar=function(req,res,next){
    return res.render('./cliente/index');    
}
//recuperando datos  con method post
var guardar = function(req,res,next){
    console.log(req.body.apellido);
    console.log(req.body.ci);
    return res.redirect('/cliente/?nombre='+req.body.apellido+
    "&edad="+req.body.ci);
}
//CRUD
module.exports = {
    index:index,
    nuevo:nuevo,
    editar:editar,
    borrar:borrar,
    guardar:guardar
}

/*
crear la ruta
categoria
    mostrar "hola categoria"
categoria/form
    dato entrada:
        nombre
        descripcion
categoria/msg
    mostrar los datos enviado

*/