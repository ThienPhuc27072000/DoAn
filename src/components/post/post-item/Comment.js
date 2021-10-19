import React from 'react';
import Moment from 'react-moment';

export default function Comment(props) {
    return(
        <>
        <li>
            <div className="comet-avatar">
                <img className="img-avatar" src={props.imgAvatar} alt=""/>
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
        </li>
        </>
    )
}