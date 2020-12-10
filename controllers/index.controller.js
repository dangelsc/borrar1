function inicio(req,res,next){
    res.render('index', { title: 'Express, server webpppppppppppp' });
}
function hola(req,res){
    res.end('El server, Dice hola');
}
module.exports= {
    index:inicio,
    hola:hola
}