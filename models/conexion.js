//////
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/prueba_2020', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('todo perfecto en la conexion a Mongodb');
});
module.exports=mongoose;
//////