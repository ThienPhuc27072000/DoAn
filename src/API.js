import axios from "axios";

export let endpoints = {
    'posts': '/posts/',
    'users': '/users/',
    'tags': '/tags/',
    'oauth2-info': '/oauth2-info/',
    'login': '/auth/token/',
    'current-user': '/users/current-user/',
    'register': '/users/',
    'post-detail': (postId) => `/posts/${postId}/`,
    'update-post': (postId) => `/posts/${postId}/`,
    'get-comments': (postId) => `/posts/${postId}/get-comments/`,
    'add-comment': (postId) => `/posts/${postId}/add-comment/`,
    'delete-post': (postId) => `/posts/${postId}/`,
    'take-action': (postId) => `/posts​/${postId}​/take-action​/`,
    'delete-comment': (commentId) => `/comments/${commentId}/`,
}

// export let AuthAPI = axios.create({
//     baseURL: 'http://127.0.0.1:8000/',
//     headers: {
//         'Authorization': `Bearer ${cookies.load('access_token')}`
//     }
// })

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})
