import React from 'react';

export default function PostComment(props) {
    return(
        <>
        <div className="comet-avatar">
            <img src={props.imgAvatar} alt=""/>
        </div>
        <div className="post-comt-box">
            <form>
                <textarea placeholder="Post your comment"></textarea>
                <button type="submit" className="btn-comment">Submit</button>
            </form>	
        </div>
        </>
    )
}