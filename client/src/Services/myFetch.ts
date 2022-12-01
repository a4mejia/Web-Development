//export const API_ROOT ='http://localhost:3000/api/v1/';
export const API_ROOT ='http://dummyjson.com/';

export default function myFetch(url: string, data: any = null,method?: string){
    const options : RequestInit ={
        method: method ?? (data ? 'POST' : 'GET'),
        headrs:(
            'Content-Type':'application/json';
        )
        body: data ? 
    }
    return fetch(API_ROOT + url).then(x =>x.json()); //only returns a promise
}