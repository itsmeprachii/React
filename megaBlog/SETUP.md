# MegaBlog Setup Guide

## Prerequisites
- Node.js installed
- An Appwrite account and project

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Appwrite

Create a `.env` file in your project root with your Appwrite credentials:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_PROJECT_ID=your-actual-project-id
VITE_DATABASE_ID=your-actual-database-id
VITE_COLLECTION_ID=your-actual-collection-id
VITE_BUCKET_ID=your-actual-bucket-id
```

### 3. Get Your Appwrite Credentials

1. Go to [Appwrite Console](https://cloud.appwrite.io/)
2. Create a new project or select existing one
3. Go to Settings → API Keys
4. Copy your Project ID
5. Create a new API key with the following permissions:
   - Users (read, write)
   - Databases (read, write)
   - Storage (read, write)

### 4. Create Database and Collection

1. In your Appwrite project, go to Databases
2. Create a new database
3. Create a collection with the following attributes:
   - `title` (string, required)
   - `content` (string, required)
   - `featuredImage` (string)
   - `status` (string, required)
   - `userId` (string, required)

### 5. Create Storage Bucket

1. Go to Storage in your Appwrite project
2. Create a new bucket for storing images
3. Set appropriate permissions

### 6. Update Environment Variables

Replace the placeholder values in your `.env` file with your actual credentials.

### 7. Run the Application

```bash
npm run dev
```

## Troubleshooting

### "this.account.createEmailSession is not a function" Error

This error occurs when Appwrite is not properly configured. Check:

1. Your `.env` file exists and has correct values
2. Your Appwrite project is active
3. Your API key has the correct permissions
4. The environment variables are being loaded (check browser console for config logs)

### Configuration Warning

If you see a yellow warning box in the top-right corner, it means your Appwrite credentials are not properly configured. Follow the setup steps above.

## Features

- ✅ User authentication (login/signup)
- ✅ Blog post creation and management
- ✅ Image upload support
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

## Tech Stack

- React 18
- Redux Toolkit
- React Router
- Appwrite (Backend as a Service)
- Tailwind CSS
- Vite 