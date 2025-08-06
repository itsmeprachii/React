const conf={
appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL || 'https://cloud.appwrite.io/v1'),
appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID || 'your-project-id'),
appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID || 'your-database-id'),
appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || 'your-collection-id'),
appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID || 'your-bucket-id')
}

export default conf