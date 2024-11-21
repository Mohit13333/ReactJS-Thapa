import axios from 'axios';

const Api=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

const getPost=() => {
    return Api.get('/posts');
}

const deletePost=(id) => {
    return Api.delete(`/posts/${id}`)
}
const postData=(post) => {
    return Api.post(`/posts/`,post)
}
const updateElemData=(id,post)=>{
    return Api.put(`/posts/${id}`,post)
}

export {getPost,deletePost,postData,updateElemData}
