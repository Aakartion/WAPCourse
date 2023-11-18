const express = require('express');


const productRouter = require('./router/product-router');


const app  = express();

app.listen(3000, ()=>{
    console.log('listen on 3000');
})