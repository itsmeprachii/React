import conf from '../conf/conf.js';
import { Client, ID,Databases,Storage,Query } from "appwrite";
export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        try {
            this.client
             .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
              .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        } catch (error) {
            console.error("Service :: constructor :: error", error);
            this.databases = null;
            this.bucket = null;
        }
    }
    async createPost({title, slug, content, featuredImage,status, userId}) {
        try {
            if (!this.databases) {
                throw new Error("Appwrite not configured properly");
            }
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
    
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service  :: createPost :: error", error);
        }
}
async updatePost(slug,{title,  content, featuredImage,status}) {
    try {
        if (!this.databases) {
            throw new Error("Appwrite not configured properly");
        }
        await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
    
            }
        )
    } catch (error) {
        console.log("Appwrite service  :: updatePost :: error", error);
    }
}
async deletePost(slug){
    try {
        if (!this.databases) {
            throw new Error("Appwrite not configured properly");
        }
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;

    } catch (error) {
        console.log("Appwrite service  :: deletePost :: error", error);
        return false;
    }
}
async getPost(slug) {
    try {
        if (!this.databases) {
            throw new Error("Appwrite not configured properly");
        }
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("Appwrite service  :: getPost :: error", error);
        return false;
    }
   // return null;
}
async getPosts(queries=[Query.equal("status","active")]) {
    try {
        if (!this.databases) {
            console.warn("Appwrite not configured properly");
            return { documents: [] };
        }
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
           
        )
    } catch (error) {
        console.log("Appwrite service  :: getPosts :: error", error);
        return { documents: [] };
    }
}
//file upload service
async uploadFile(file) {
    try {
        if (!this.bucket) {
            throw new Error("Appwrite not configured properly");
        }
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service  :: uploadFile :: error", error);
        return false;
    }
}
async deleteFile(fileId) {
    try {
        if (!this.bucket) {
            throw new Error("Appwrite not configured properly");
        }
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true;
    } catch (error) {
        console.log("Appwrite service  :: deleteFile :: error", error);
        return false;
    }
}
getFilePreview(fileId){
    try {
        if (!this.bucket) {
            console.warn("Appwrite not configured properly");
            return "";
        }
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("Appwrite service  :: getFilePreview :: error", error);
        return "";
    }
}
}
const service=new Service();
export default service;