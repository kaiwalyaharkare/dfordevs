import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const getPost = async ()=> await  axios.get(url)
export const createPost = async (data)=> await axios.post(url,data)
export const deletePost = async (id) =>await axios.delete(url,id)
export const login = async(data)=> await axios.post('http://localhost:5000/user',data)
export const postbyId = async(id)=>await axios.get(`http://localhost:5000/posts/${id}`)