const express = require('express');
const app= express();

const productsController = require('./Controllers/products');
const cartController =require('./Controllers/cart');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use((req, res, next)=>{
  res.setHeader('SUNY','NP')
  next();
})


app.use('/',express.static('./client/dist'));

app
  .get('/',(req,res)=>{
    res.status(200).send('hello');
  })
  .get('/error', (req, res)=>{
    sss.PORT();
  })  
  .use ('/api/v1/products', productsController)
  .use('/api/v1/cart', cartController)

app.get('*', (req,res)=>{
    res.sendFile('index.html', {root: './client/dist'});
})
 
app.use ((err, req, res, next)=>{
  console.log(err);
  res.status(err.httpCode ?? 500).send({
    message: err.msg ?? 'Something went wrong!',
    status: err.httpCode ?? 500
  });
    
})
app.listen(port, ()=>{
  console.log('Server running at http://${hostname}:${port}/')
});

