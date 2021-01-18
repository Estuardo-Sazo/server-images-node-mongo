const mongoose = require('mongoose');
const hostPort= 'localhost';

mongoose.connect('mongodb://'+hostPort+'/imagesDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('Coneccion a DB'))
    .catch(err => console.log(err));

