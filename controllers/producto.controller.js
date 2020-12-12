function inicio(req,res,next){
    var nombre='juanito';
    let lista=[
        {nombre:'juanito',ci:'99999' },
        {nombre:'patty',ci:'555559' },
        {nombre:'julieta',ci:'4444449' }
    ];
    
    res.render('./producto/index',{dato:nombre,
        lista:lista
    });
}
function nuevo(req,res,next){
    return res.send('agregando nuevo producto');
}
module.exports={
    index:inicio,
    nuevo:nuevo
}