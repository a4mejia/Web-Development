const data = require('../data/prducts.json');
const {connect}= require('./mongo')
const {ObjectId} = require ()
const COLLECTION_NAME = 'products';
async function collection(){
    const client = await connect()
    return client.db("chopiphy").collection("products");
     
}
async function getProducts(){
    const db = await collection();
    const data = await db.find().toArray()
    return {total: data.length, limit: data.length, products: data};
}
async function getProduct(id){
    const db = await collection();
    const data = await db.findOne({_id: id})
    return data;
  
}
async function seed(){
    const db = await collection();
    db.insertMany(data.products);
    return 'success';
}
module.exports={
    getProducts,
    collection,
    COLLECTION_NAME,
    seed,
    getProduct
};