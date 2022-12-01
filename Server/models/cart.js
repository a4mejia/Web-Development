const { getProduct}= require('./products')
const list=[];
const {connect} = require('./mongo')
const COLLECTION_NAME = 'cart';

async function collection(){
    const client = await connect();
    return client.db('chopiphy').collection(COLLECTION_NAME);
}
const get = async (userId)=>{
    const db = await collection();
    const data = await db.find((userId)).toArray();
    return data
    .filter((cartItem)=>cartItem.userId === userId)
    .map((cartItem)=>({ 
        ...cartItem, 
        product:getProduct(productId)
    }));
};
/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const add =( userId, productId, quantity)=>{
    const db = await collection();
    let cartItem = db.findOne((userId, productId));
 //   let cartItem = list.find((cartItem)=>cartItem.userId=== userId && cartItem.productId === productId);
    if(cartItem){
        cartItem.quantity+= quantity;
        db.updateOne((userId, productId), cartItem);
    }
    else{
        cartItem = {id: list.length + 1,quantity, productId: userId}
   //     list.push.cartItem;
        await db.insertOne(cartItem);
    }
    return {...cartItem, product:getProduct(productId)};
};
/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */

const update =(userId,productId, quantity)=>{
    const index= list.findIndex((cartItem)=>cartItem.userId===userId && cartItem.productId===productId);
    const db = await collection();

    if(index !== -1){
        if (quantity === 0){
            db.deleteOne((userId, productId))
        //   list.splice(index, 1)
            return "null";
        }
        else{
        //    list[index].quantity = quantity;
            cartItem.quantity = quantity;
            db.updateOne((userId, productId), cartItem);
        }
    }
    else{
        throw new Error('Cart Item Not Found');
    }
    return index;

}
module.exports = { add, get, update}