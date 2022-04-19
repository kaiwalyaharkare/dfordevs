import { AUTH,LOGOUT } from "../constants/actionStrings";

export const authAction = (result,token) =>{
    return {
        type:AUTH,
        payload:{result,token}
    }
}

export const logout = () =>({type:LOGOUT})