const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',  (req, res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000");
});