import { appWriteConfig, client, databases } from "@/lib/appWriteConfig";
import { FormUpload, VideoDocument } from "@/types/video";
import { DocumentPickerAsset } from "expo-document-picker";
import { ID, Query, Storage } from "react-native-appwrite";

const storage = new Storage(client)

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

export const searchPost = async (query : string) => {
    try {
        const posts = await databases.listDocuments(
            appWriteConfig.databaseId as string,
            appWriteConfig.videoCollectionId as string,
            [Query.search('title', query)]
        )
        return posts.documents as VideoDocument[]
    } catch (error:any) {
        console.error(error)
    }
};

export const getUserPosts = async (userId : string|undefined) => {
    try {
        if (userId) {
            const posts = await databases.listDocuments(
                appWriteConfig.databaseId as string,
                appWriteConfig.videoCollectionId as string,
                [Query.equal('creator', userId)]
            )
            return posts.documents as VideoDocument[]
        }
        throw Error
    } catch (error:any) {
        console.error(error)
    }
};

const getFilePreview = async (id : string) => {
    try {
        const fileUrl = await storage.getFileView(appWriteConfig.storageId as string, id)
        if (!fileUrl) throw Error
        return fileUrl
    } catch (error:any) {
        throw new Error(error)
    } 
}

const uploadFile = async (file : null|DocumentPickerAsset) => {
    if (!file) return
    const asset = {
        name : file.name,
        type : file.mimeType as string,
        size : file.size as number,
        uri : file.uri
    }
    try {
        const uploadedFile = await storage.createFile(
            appWriteConfig.storageId as string,
            ID.unique(),
            asset
        )
        const fileUrl = await getFilePreview(uploadedFile.$id)
        return fileUrl
    } catch (error:any) {
        throw new Error(error)
    }  
}

export const createVideo = async (form : FormUpload) => {
    try {
        const [thumbnailUrl, videoUrl] = await Promise.all([
            uploadFile(form.thumbnail),
            uploadFile(form.video)
        ])
        if (form.userId) {
            const newPost = await databases.createDocument(
                appWriteConfig.databaseId as string,
                appWriteConfig.videoCollectionId as string,
                ID.unique(),
                {
                    title : form.title,
                    video : videoUrl,
                    thumbnail : thumbnailUrl,
                    prompt : form.prompt,
                    creator : form.userId
                }
            )
            return newPost
        }
        if (!form.userId) throw Error('Creator is undefined')
    } catch (error:any) {
        throw new Error(error)
    }
};
