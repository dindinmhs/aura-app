import { Client, Databases } from 'react-native-appwrite';

export const appWriteConfig = {
    endpoint : process.env.EXPO_PUBLIC_ENDPOINT,
    projectId : process.env.EXPO_PUBLIC_PROJECT_ID,
    platform : process.env.EXPO_PUBLIC_PLATFORM,
    databaseId : process.env.EXPO_PUBLIC_DATABASE_ID,
    userCollectionId : process.env.EXPO_PUBLIC_USER_COLLECTION_ID,
    videoCollectionId : process.env.EXPO_PUBLIC_VIDEO_COLLETION_ID,
    storageId : process.env.EXPO_PUBLIC_STORAHE_ID
}

const client = new Client();

client
.setEndpoint(appWriteConfig.endpoint as string)
.setProject(appWriteConfig.projectId as string)
.setPlatform(appWriteConfig.platform as string);

const databases = new Databases(client)

export { client, databases }

