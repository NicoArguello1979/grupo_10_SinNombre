const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});


app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});

app.get('/producto', (req,res)=>{
    res.sendFile(__dirname + '/views/producto.html');
});