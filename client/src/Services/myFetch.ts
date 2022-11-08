//export const API_ROOT ='http://localhost:3000/api/v1/';
export const API_ROOT ='http://dummyjson.com/';

export default function myFetch(url: string){
    return fetch(API_ROOT + url).then(x =>x.json()); //only returns a promise
}