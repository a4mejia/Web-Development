//import data from '../data/products.json';
import myFetch from "@/Services/myFetch";
export function getProducts(){
    return myFetch <ProductDocument>('product')
        .then(x=>x.products);
}
export function getProduct(id:number){
    return myFetch<Product>
}
export function deleteProduct(id:number){
    data.products = data.products.filter((product)=> product.id !== id);
}
export interface ProductDocument{
    products: Product[]
    total: number
    skip: number
    limit: number
}
export interface Product{
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[];
}