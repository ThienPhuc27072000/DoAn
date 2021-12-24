import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";
import API, { endpoints } from "../../../API";
import cookies from 'react-cookies';


export default function WeInfo(props) {
    const [like, setLike] = useState(null)
    // let {postId} = useParams()
    const postId = props.postId

    const handleClick = () => {
        setLike(like + 1);
    }
    const label = like ? 'Unlike' : 'Like';

    let likePost = async (event) => {
        event.preventDefault();
        try {
            let res = await API.post(endpoints['take-action'](postId), {
                headers: {
                    "Authorization": `Bearer ${cookies.load("access_token")}`
                  },
            })
            setLike(res.data)
            console.info(res.data)
            like.push(res.data)
            setLike(like)
        } catch (err) {
            console.error(err)
        }     
    } 
    
    useEffect(() => {
        // let takeAction = async() => {
        //     try {
        //         let res = await API.post(endpoints['take-action'](postId))
        //         setLike(res.data.results)
        //     } catch(err) {
        //         console.error(err)
        //     }
        // }
        // takeAction()

        // const btnLike = document.querySelector('.btn-like')
        // const likePostChange = document.querySelector('.btn-like')
        // function likePost() {
        //     likePostChange.classList.add('isLiked')
        //     btnLike.classList.add('isLiked')
        // }
        // btnLike.addEventListener('click', likePost);
        // return () => {
        //   btnLike.removeEventListener('click', likePost);
        // }
    }, []);
    return(
        <>
        <div className="we-video-info">
            <div onClick={likePost}>
                <button className="btn-like" onClick={handleClick}> {label} 
                    <FontAwesomeIcon className="icon-like" icon={faThumbsUp}></FontAwesomeIcon>
                </button>
            </div>
            {/* <div className="input-auction">
                <input type="text" placeholder="Input price you want to auction (VNĐ)" /> 
            </div>
            <p className="note-auction">Only enter once</p>             */}
        </div>
        </>
    )
}
