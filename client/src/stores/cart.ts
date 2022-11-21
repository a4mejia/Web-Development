import myFetch from "@/Services/myFetch";
import { reactive, watch} from "vue";
import type {Product} from './products';
import session from "./session";

export interface CartItem{
    quantity: number;
    product:Product;
}

const cart = reactive( [] as CartItem[]);
export function load(){
    myFetch(`cart/$(session.user?.email)`).then((data)=>{
        cart.splice(0, cart.length, ...data as CartItem[]);
    });
}
watch(()=> session.user, load);

export function addProductToCart (product:Product, quantity:number=1){
    const cartItem = cart.find((item)=>item.product.id === product.id);
    if (cartItem){
        cartItem.quantity+=quantity;
    }
    else{
        cart.push({
            quantity,
            product,
        })
    }
}

export function updateProductQuantity(id:number, quantity:number){
    myFetch<CartItem>(`cart/${session.user?.email}/${id}/${quantity}`, {}, PATCH)/then((data)=>{
        cart.splice(0, cart.length, ...data as cartItem);
    if (i != -1){
        if (data){
            cart[i]=data;
        }
        else{
            cart.splice(i,1);
        }
    }
    });
}
export default cart;