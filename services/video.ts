import { appWriteConfig, databases } from "@/lib/appWriteConfig";
import { VideoDocument } from "@/types/video";

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
