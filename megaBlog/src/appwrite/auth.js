import conf from '../config/confi.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client()
    account;
    constructor(){
        this.client
         .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
          .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
        this.account = new Account(this.client);
   }
async createAccount({email, password, name}) {
    try{
        const userAccount=await this.account.create(ID.unique(), email, password, name);
        if(userAccount){
            //if user exist,then let it login

            return this.login({email, password});
    }
    else{
        return userAccount;
    }
}
    catch(error){
        console.error("AuthService :: createAccount :: error", error);
        throw error;
    }

}
async login({email, password}) {
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        console.error("AuthService :: createAccount :: error", error);
        throw error;
        
    }
}
async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite service  :: getCurrentUser :: error", error);
    }
    return null;
}
async logout() {
    try {
         await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service  :: logout :: error", error);
    }
    
}
}
const authService=new AuthService();
export default authService;
