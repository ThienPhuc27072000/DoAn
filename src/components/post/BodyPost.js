import React, { useEffect, useState } from "react";
import API, { endpoints } from "../../API";
import PostCard from "./post-item/PostCard"; 

export default function BodyPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        let loadPosts = async() => {
            try {
                let res = await API.get(endpoints['posts'])
                setPosts(res.data.results)
            } catch(err) {
                console.error(err)
            }
        }
        loadPosts()
    }, [])

    return(
        <>
            {posts.map(p => <PostCard post={p} type="post"/> )}

        </>
    ) 
}
