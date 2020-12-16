var Producto = require('../models/producto.model');
var ruta='producto';
function inicio(req,res,next){
    Producto.find({estado:1},(err,lista)=>{
        if(err)
            return res.render('./'+ruta+'/index',{error:err,lista:[]});
        return res.render('./'+ruta+'/index',{error:'',lista:lista});
    })
}
function nuevo(req,res,next){
    let aux=new Producto();
    aux._id=null;
    return res.render('./'+ruta+'/form',aux);
}
async function nuevo_post(req,res,next){
    req.body.estado=1;

    let nuevo_producto = new Producto(req.body);
//nuevo_producto.estado=1;
    //nuevo_producto.nombre=req.body.nombre;
    try{
        let dato = await nuevo_producto.save();
        if(dato)
            return res.redirect('/'+ruta);
        else
        {
            req.body.error='Paso algo malo, intenta mas tarde';
            return res.render('./'+ruta+'/form',req.body);
        }
    }catch(err){
        req.body.error=err;
        return res.render('./'+ruta+'/form',req.body);
    }
}
async function edit(req,res,next){
    try{
        let prod = await Producto.findById(req.params.id);
        return res.render('./'+ruta+'/form',prod);
    }catch(err){
        return res.redirect('/'+ruta,{error:err});
    }
    
}
function edit_post(req,res,next){
    Producto.findByIdAndUpdate(req.params.id,req.body,(err,dato)=>{
        if(err){
            req.body.error=err;
            return res.render('./'+ruta+'/form',req.body);
        }
        if(dato)
            return res.redirect('/'+ruta);
        else{
            req.body.error='Paso algo malo, intenta mas tarde';
            return res.render('./'+ruta+'/form',req.body);
        }
    })    
}
function borrar(req,res,next){
    Producto.findByIdAndUpdate(req.params.id,{estado:0},(err,dato)=>{
        if(err)
            return res.redirect('/'+ruta);
        if(dato)
            return res.redirect('/'+ruta);
        else
            return res.redirect('/'+ruta);

    })
}
module.exports={
    index:inicio,
    nuevo:nuevo,
    nuevo_post:nuevo_post,
    edit:edit,
    edit_post:edit_post,
    borrar:borrar
}