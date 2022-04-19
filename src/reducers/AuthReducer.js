import { AUTH,LOGOUT } from "../constants/actionStrings"

export default  (state={},action) =>{
    switch(action.type){
        case AUTH:
            console.log(action.payload)
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload}));
            return {...state, authdata: action.payload}
        case LOGOUT:
            localStorage.clear()
        default:
            return state
    }
}

