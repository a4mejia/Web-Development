import { reactive } from "vue";

const session = reactive ({
    user: null as User | null,
});
 
export function login(firstName: string, lastName: string) {
  session.user = {
    fistName,
    lastName,
};

}
export function logout(){
    session.user=null;
}
export class User{
    public fistName?: string;
    public lastName?: string;
}
export default session;