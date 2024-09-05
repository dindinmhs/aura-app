import { Models } from "react-native-appwrite";
import { userType } from "./user";

export interface VideoType {
    creator : userType;
    prompt : string;
    title : string;
    video : string;
    thumbnail : string;
}

export type VideoDocument = Models.Document & VideoType