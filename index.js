const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/',  (req, res)=>{
    res.render('index', {
        autor :"Jesus Palacios",
        year : "2020",
        title : "Inicio"
    });
});

app.get('/picaso',  (req, res)=>{
    res.render('picaso', {
        autor :"Jesus Palacios",
        year : "2020",
        title : "Pablo Picasso"
    });
});

app.get('/gogh',  (req, res)=>{
    res.render('gogh', {
        autor :"Jesus Palacios",
        year : "2020",
        title : "Van Gogh"
    });
});

app.get('/jean',  (req, res)=>{
    res.render('jean', {
        autor :"Jesus Palacios",
        year : "2020",
        title : "Jean"
    });
});

app.get('/leonardo',  (req, res)=>{
    res.render('leonardo', {
        autor :"Jesus Palacios",
        year : "2020",
        title : "Leonardo da Vinci"
    });
});

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000");
});