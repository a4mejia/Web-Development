import myFetch from "@/Services/myFetch";
import { reactive } from "vue";

const session = reactive ({
    user: null as User | null,
    loading: 0,
    error: null as string |null,
    messages: [] as Message[],
});
export default session;

export function setError(error: string | null){
    session.error=error;
    if (error){
        session.messages.push({type:'danger', text: error}); 
    }
}
export const isLoading = computed(() => !! session.loading);

export async function api<T>(url: string, data: any=null, method?:string){
    session.loading++;
    setError(null);
    try{
       return await myFetch<T>(url, data, method);
    }
    catch(error){
        setError(error as string);
    }
    finally(
        session.loading--;
    )
    return {} as T;
}
export function login(firstName: string, lastName: string) {
  session.user = {
    firstName,
    lastName,
};

}
export function logout(){
    session.user=null;
}
export class User{
    public firstName?: string;
    public lastName?: string;
}

export Message{

}