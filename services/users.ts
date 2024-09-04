import { appWriteConfig, client, databases } from "@/lib/appWriteConfig"
import { userType } from "@/types/user"
import { Account, Avatars, ID, Query } from "react-native-appwrite"

const account = new Account(client)
const avatar = new Avatars(client)

export const createUser = async (username : string, email : string, password : string) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username)

        if (!newAccount) throw Error

        const avatarUrl = avatar.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            appWriteConfig.databaseId as string, 
            appWriteConfig.userCollectionId as string, 
            ID.unique(),
            {
                accountId : newAccount.$id,
                username : username,
                email : email,
                avatar : avatarUrl
            }
        )

        return newUser
    } catch (error:any) {
        console.error(error)
        throw new Error(error)
    }
}

export const signIn = async (email : string, password : string) => {
    try {
        const session = account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        console.error(error)
    }
};

export const getCurrentUser = async () => {
    try {
        const currenAccount = await account.get()

        if (!currenAccount) throw Error

        const currentUser = await databases.listDocuments(
            appWriteConfig.databaseId as string,
            appWriteConfig.userCollectionId as string,
            [Query.equal('accountId', currenAccount.$id)]
        )

        if (!currentUser) throw Error
        return {
            id : currentUser.documents[0].$id,
            createdAt : currentUser.documents[0].$createdAt,
            updateAt : currentUser.documents[0].$updatedAt,
            accountId : currentUser.documents[0].accountId,
            avatar : currentUser.documents[0].avatar,
            email : currentUser.documents[0].email,
            username : currentUser.documents[0].username,
        }

    } catch (error) {
        console.error(error)
    }
};