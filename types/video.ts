import { Models } from "react-native-appwrite";
import { userType } from "./user";
import { DocumentPickerAsset } from "expo-document-picker";

export interface VideoType {
    creator : userType;
    prompt : string;
    title : string;
    video : string;
    thumbnail : string;
}

export interface FormUpload {
    title : string;
    thumbnail : null | DocumentPickerAsset;
    video : null | DocumentPickerAsset;
    prompt : string;
    userId : undefined | string;
}

export type VideoDocument = Models.Document & VideoType

