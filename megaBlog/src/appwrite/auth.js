import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client()
    account;
    constructor(){
        try {
            console.log("AuthService :: constructor :: config:", {
                url: conf.appwriteUrl,
                projectId: conf.appwriteProjectId
            });
            
            this.client
             .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
              .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
            this.account = new Account(this.client);
            
            console.log("AuthService :: constructor :: account initialized:", !!this.account);
        } catch (error) {
            console.error("AuthService :: constructor :: error", error);
            this.account = null;
        }
   }
async createAccount({email, password, name}) {
    try{
        if (!this.account) {
            throw new Error("Appwrite not configured properly. Please check your environment variables.");
        }
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
        if (!this.account) {
            throw new Error("Appwrite not configured properly. Please check your environment variables.");
        }
        console.log("AuthService :: login :: attempting login for:", email);
        const session = await this.account.createEmailPasswordSession(email, password);
        console.log("AuthService :: login :: session created:", !!session);
        return session;
    } catch (error) {
        console.error("AuthService :: login :: error", error);
        throw error;
        
    }
}
async getCurrentUser() {
    try {
        if (!this.account) {
            console.warn("Appwrite not configured properly");
            return null;
        }
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite service  :: getCurrentUser :: error", error);
    }
    return null;
}
async logout() {
    try {
        if (!this.account) {
            console.warn("Appwrite not configured properly");
            return;
        }
         await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service  :: logout :: error", error);
    }
}
}
const authService=new AuthService();
export default authService;
