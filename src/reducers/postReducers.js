import { GETPOSTS,CREATEPOST, DELETEPOSTS, GETPOSTSBYID, STARTLOADING, ENDLOADING } from "../constants/actionStrings";


export default (state = {isLoading:true, posts:[]}, action) =>{
    switch (action.type) {
        case STARTLOADING:
            return { ...state, isLoading: true };
        case ENDLOADING:
            return {...state, isLoading:false};
        case GETPOSTS:
            console.log(action)
            return {...state, posts:action.payload}
        case CREATEPOST:
            return {...state,posts:action.payload}
        case GETPOSTSBYID:
            return {... state,posts:action.payload}
        case DELETEPOSTS:
            return state.posts.filter((post)=>(post._id==!action.payload))
        default:
            return state
    }
}
