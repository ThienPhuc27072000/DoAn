import React, { useEffect, useState } from "react";
import { Pagination, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import API, { endpoints } from "../../API";
import PostCard from "./post-item/PostCard"; 
import LazyLoad from 'react-lazyload';


export default function BodyPost(props) {
    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(1)

    const Loading = () => (
        <div className="post loading">
            <h5 className="text-center text-danger">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </h5>
        </div>
    )

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
            {/* {posts.map(p => <PostCard post={p} type="post"/> )} */}
            {posts.map(p =>
                <LazyLoad key={p.id} height={100} offset={[-100, 100]} placeholder={<Loading />} >
                    <PostCard post={p} type="post" />
                </LazyLoad> 
            )}
            {/* {buttonPage} */}
        </>
    ) 
}
