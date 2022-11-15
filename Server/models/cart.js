const { getProduct}= require('./products')
const list=[];

const get = (userId)=>{
    return list
    .filter((cartItem)=>cartItem.userId === userId)
    .map((cartItem)=>({ ...cartItem, product:getProduct(productId)
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
    let cartItem = list.find((cartItem)=>cartItem.userId=== userId && cartItem.productId === productId);
    if(cartItem){
        cartItem.quantity+= quantity;
    }
    else{
        cartItem = {id: list.length + 1,quantity, productId: userId}
        list.push.cartItem;
    }
    return ( ...cartItem, product: getProduct(productId));
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
    if(index !== -1){
        if (quantity === 0){
            list.splice(index, 0)
        }
        else{
            list[index].quantity
        }
        list.splice(index,1);
    }
    else{
        throw new Error('Cart Item Not Found');
    }
    return index;

}
module.exports = { add, get, update};