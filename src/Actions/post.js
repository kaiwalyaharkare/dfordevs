import thunk, { useDispatch } from 'react-redux';
import { GETPOSTS,CREATEPOST, DELETEPOSTS, GETPOSTSBYID, ENDLOADING, STARTLOADING } from '../constants/actionStrings';
import * as api from '../api/index'


export const getPost = ()=> async(dispatch) =>{
    try {
        dispatch({type:STARTLOADING})
        const {data} = await api.getPost();
        console.log(data)
        dispatch({type:GETPOSTS,payload:data})
        dispatch({type:ENDLOADING})
    } catch (error) {
        console.log(error)
    }
}
export const createPost = (postdata) => async (dispatch) =>{
    try {
       
        const {data} = await api.createPost(postdata)
        dispatch({type:CREATEPOST,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (postid) =>async (dispatch)=>{
    try{
        console.log(postid)
        await api.deletePost(postid)
        dispatch({type:DELETEPOSTS,payload:postid})
    }
    catch(error){
        console.log(error)
    }
}

export const getPostById = (id)=> async (dispatch)=>{
    try {
        dispatch({type:STARTLOADING})
        const {data} =await api.postbyId(id)
        console.log(data)
        dispatch({type:GETPOSTSBYID,payload:data})
        dispatch({type:ENDLOADING})
    } catch (error) {
        console.log(error)
    }
}