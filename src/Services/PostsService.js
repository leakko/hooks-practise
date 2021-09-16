import http from "./BaseService"

export const getPosts = () => {
    return http.get("/posts")
}

export const getPost = (id) => {
    return http.get(`/posts/${id}`)
}

export const getComments = (id) => {
    return http.get(`/comments`, { params: { postId: id } })
}
