 const mongoose =  require('mongoose');

 const URL = process.env.MONGO_URI;


 const conexion = mongoose.connect(URL
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

module.exports = conexion;