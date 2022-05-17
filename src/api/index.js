import axios from 'axios'

const url = 'https://dfordevlopers.herokuapp.com/posts'

export const getPost = async ()=> await  axios.get(url)
export const createPost = async (data)=> await axios.post(url,data)
export const deletePost = async (id) =>await axios.delete(url,id)
export const login = async(data)=> await axios.post('https://dfordevlopers.herokuapp.com/user',data)
export const postbyId = async(id)=>await axios.get(`https://dfordevlopers.herokuapp.com/posts/${id}`)