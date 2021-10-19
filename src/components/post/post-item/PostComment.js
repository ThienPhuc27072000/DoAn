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
                {/* <div className="add-smiles">
                    <span className="em em-expressionless" title="add icon"></span>
                </div> */}
                {/* <div className="smiles-bunch">
                    <i className="em em---1"></i>
                    <i className="em em-smiley"></i>
                    <i className="em em-anguished"></i>
                    <i className="em em-laughing"></i>
                    <i className="em em-angry"></i>
                    <i className="em em-astonished"></i>
                    <i className="em em-blush"></i>
                    <i className="em em-disappointed"></i>
                    <i className="em em-worried"></i>
                    <i className="em em-kissing_heart"></i>
                    <i className="em em-rage"></i>
                    <i className="em em-stuck_out_tongue"></i>
                </div> */}
                <button type="submit" className="btn-comment">Submit</button>
            </form>	
        </div>
        </>
    )
}