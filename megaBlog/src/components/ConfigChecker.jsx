import React from 'react';
import conf from '../conf/conf.js';

function ConfigChecker() {
  const isConfigured = () => {
    return conf.appwriteProjectId !== 'your-project-id' && 
           conf.appwriteDatabaseId !== 'your-database-id' &&
           conf.appwriteCollectionId !== 'your-collection-id' &&
           conf.appwriteBucketId !== 'your-bucket-id';
  };

  if (isConfigured()) {
    return null; // Don't show anything if properly configured
  }

  return (
    <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-50 max-w-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">Appwrite Configuration Required</h3>
          <div className="mt-2 text-sm">
            <p>Please create a <code className="bg-yellow-200 px-1 rounded">.env</code> file in your project root with your Appwrite credentials:</p>
            <pre className="mt-2 text-xs bg-yellow-200 p-2 rounded overflow-auto">
{`VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_PROJECT_ID=your-actual-project-id
VITE_DATABASE_ID=your-actual-database-id
VITE_COLLECTION_ID=your-actual-collection-id
VITE_BUCKET_ID=your-actual-bucket-id`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigChecker; 