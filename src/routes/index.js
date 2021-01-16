const {Router} = require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.send('Index Page');
});

router.get('/subir', (req, res) =>{
    res.render('upload')
});

router.post('/subir', (req, res) =>{
    console.log(req.file);
    res.send('Subido');


});

router.get('/image/:id', (req, res) =>{
    res.send('Perfil de imagen');
});

router.get('/image/:id', (req, res) =>{
    res.send('Index Page');
});


router.get('/image/:id/delete', (req, res) =>{
    res.send('Imagen Eliminada');
});


module.exports = router;