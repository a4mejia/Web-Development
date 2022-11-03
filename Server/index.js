const express = require('express')
const app = express()

const productsController = require ('./controllers/products')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use((req, res, next)=>{
  res.setHeader('SUNY','NP')
  next();
})
app.use(express.static('./client/dist'));
app
  .get('/',(req,res)=>{
    res.status(200).send('hello');
  })
  
  .use ('/api/v1/products', productsController);
app.get('*', (req, res)=>{
  res.sendFile('.client/dist/index.html')
}) 
app.use ((err, req, res, next)=>{
  console.log(err);
  res.status(err.httpCode ?? 500).send(err.msg ?? 'Something broke!')
})
app.listen(port, ()=>{
  console.log('Server running at http://${hostname}:${port}/')
})

