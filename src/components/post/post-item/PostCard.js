import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import PostComment from './PostComment';
import WeInfo from './WeInfo';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import API, { endpoints } from '../../../API';
import cookies from 'react-cookies';
import { useParams } from "react-router";


export default function PostCard(props) {
    const [posts, setPosts] = useState(null)
    const [changed, setChanged] = useState(1)
    let {postId} = useParams()

    let path
    if (props.type === "post")
        path = `/posts/${props.post.id}`

    let deletePost = async (event) => {
        // event.preventDefault();
        try {
            let res = await API.delete(endpoints['delete-post'](postId), {
                headers: {
                    "Authorization": `Bearer ${cookies.load("access_token")}`
                  },
            })
            setPosts(res.data)
            console.info(res.data)
            posts.push(res.data)
            setPosts(posts)
            setChanged(posts.length)
        } catch (err) {
            console.error(err)
        }     
    } 

    // useEffect(() => {
    //     let deletePost = async () => {
    //       try {
    //         let res = await API.delete(endpoints["delete-post"](postId))
    //         setPosts(res.data)
    //       } catch (err) {
    //         console.error(err)
    //       }
    //     }
    //     deletePost()
    // }, [changed])
    return(
        <>
        <div className="central-meta item">
            <div className="user-post">
                <div className="friend-info">
                    <figure>
                        <img src={props.post.creator.avatar} alt="" />
                    </figure>
                    <div className="friend-name">
                        <ins><a href="/timeline" title="">{props.post.creator.username}</a></ins>
                        <i className="ti-more-alt icon-three-dot">
                            <ul className="choose">
                                <li className='choose-item'><Link to={path}>Post Detail</Link></li>
                                <li className='choose-item'><Link to={deletePost}>Update Post</Link></li>
                                <li className='choose-item'><Link to="">Delete Post</Link></li>
                            </ul>
                        </i>
                    </div>
                    <div>                         
                    </div>
                    <div className="description">
                        <p>Tag: {props.post.tags.map(t => 
                            <Badge className="tag" bg="secondary">{t.name}</Badge>)}
                        </p>
                        <p>{props.post.content}</p>
                    </div>
                    <div class="post-meta">
                        <img src={props.post.image} alt="ảnh bài post"></img>       
                    </div>  
                    {/* {img} */}
                    <WeInfo /> 
                </div>
            </div>
            {/* Comment */}
            {/* <div className="coment-area">
                <ul className="we-comet">
                    <Comment imgAvatar="images/resources/comet-1.jpg" nameUser="Khoa" timeComment="1 minute ago"
                            contentComment="Giàu" /> 
                    <li>
                        <a href="#" title="" className="showmore underline">More comments</a>
                    </li>
                    <li className="post-comment">
                        <PostComment/>
                    </li>
                </ul>
            </div> */}
        </div>
        </>
    )
}