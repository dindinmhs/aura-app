import { Models } from "react-native-appwrite";

export interface userBaseType {
    username : string;
    email : string;
}

export interface userType extends userBaseType {
    accountId : string;
    avatar : string;
}

export type UserDocument = Models.Document & userType