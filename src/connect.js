const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb+srv://apeexperience:<8wdKTJKla8OVHKCR>@ape.pvr3vqh.mongodb.net/APEdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conexión exitosa a la base de datos APEdb'))
  .catch(err => console.error('Error al conectar a la base de datos APEdb: ', err));