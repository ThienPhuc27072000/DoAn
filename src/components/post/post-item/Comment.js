import React, { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import API, { endpoints } from '../../../API';
import cookies from 'react-cookies';
import { useParams } from "react-router";


export default function Comment(props) {
    const [comment, setComment] = useState([])
    // let {commentId} = useParams()
    const [changed, setChanged] = useState(1)
    const commentId = props.commentId

    let deleteComment = async (event) => {
        event.preventDefault();
        try {
            let res = await API.delete(endpoints['delete-comment'](commentId), {
                headers: {
                    "Authorization": `Bearer ${cookies.load("access_token")}`
                  },
            })
            setComment(res.data)
            console.info(res.data)
            comment.push(res.data)
            
            setChanged(comment.length)
            setComment(comment)
        } catch (err) {
            console.error(err)
        }     
    } 

    const refreshPage = () => {
        window.location.reload();
    }

    return(
        <>
        <li>
            <div className="comet-avatar fix-img-post">
                <img className="img-avatar img-avatar-comment" src={props.imgAvatar} alt=""/>
            </div>
            <div className="we-comment">
                <div className="coment-head">
                    <h5><a href="time-line.html" title="">{props.nameUser}</a></h5>
                    <span><Moment fromNow>{props.timeComment}</Moment></span>
                    <a className="we-reply" href="#" title="Reply">
                        <i className="fa fa-reply"></i>
                    </a>
                </div>
                <p>{props.contentComment}</p>
            </div>
            <i className="ti-more-alt icon-three-dot-comment">
                <ul className="choose-comment">
                    <li className='choose-item'><Link to="">Update Comment</Link></li>
                    <li className='choose-item' onClick={deleteComment}>
                        <Link to="#">Delete Comment</Link></li>
                </ul>
            </i>
        </li>
        </>
    )
}