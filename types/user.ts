export interface userBaseType {
    username : string;
    email : string;
}

export interface userType extends userBaseType {
    id : string;
    createdAt : string;
    updateAt : string;
    accountId : string;
    avatar : string;
}