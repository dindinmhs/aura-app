export interface userBaseType {
    username : string;
    email : string;
}

export interface userType extends userBaseType {
    accountId : string;
    avatar : string;
}