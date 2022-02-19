import { tokenName } from "./constant";
import jwt_decode from "jwt-decode";

type decodeJWT = {
    exp: number;
    iat: number;
    sub: string;
}

export const authUser = () =>  {
    var token = localStorage.getItem(tokenName);
    if(token){  
        const decode: decodeJWT = jwt_decode(token as string);
        var today = Math.round((new Date()).getTime() / 1000);
        if(decode?.exp < today){
            return false;
        }
        return true;
    }
    return false;  
}