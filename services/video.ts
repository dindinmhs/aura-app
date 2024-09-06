import { appWriteConfig, databases } from "@/lib/appWriteConfig";
import { VideoDocument } from "@/types/video";
import { Query } from "react-native-appwrite";

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            appWriteConfig.databaseId as string,
            appWriteConfig.videoCollectionId as string
        )
        return posts.documents as VideoDocument[]
    } catch (error:any) {
        console.error(error)
    }
};

export const getLatestPost = async () => {
    try {
        const posts = await databases.listDocuments(
            appWriteConfig.databaseId as string,
            appWriteConfig.videoCollectionId as string,
            [Query.orderDesc('$createdAt'), Query.limit(5)]
        )
        return posts.documents as VideoDocument[]
    } catch (error:any) {
        console.error(error)
    }
};