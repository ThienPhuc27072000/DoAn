import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NewPostBox() {
    useEffect(() => {
        const createPostBtn = document.querySelector('#add-newpost-modal')
        const modalNewPost = document.querySelector('.js-modal-newpost')
        const modalCloseNewPost = document.querySelector('.js-modal-close-newpost')
        function showCreatePost() {
            modalNewPost.classList.add('open')
        }
        function closeCreatePost() {
            modalNewPost.classList.remove('open')
        }
        createPostBtn.addEventListener('click', showCreatePost);
        modalCloseNewPost.addEventListener('click', closeCreatePost);

        return () => {
          createPostBtn.removeEventListener('click', showCreatePost);
          modalCloseNewPost.removeEventListener('click', closeCreatePost);
        };
      }, []);

    //   Xử lí chưa đăng nhập thì k add post dc
    let user = useSelector(state => state.user.user)
    let addPost =   <>
                    <div className="central-meta item">    
                        <div className="new-postbox">        
                            <Link to="/">
                                <button id="add-newpost-modal">Login to add Post</button>
                            </Link>  
                        </div>
                    </div>
                    </>
    if(user !== null && user !== undefined) {
        addPost = <>
                <div className="central-meta item">    
                    <div className="new-postbox">        
                        <button id="add-newpost-modal">Create New Post</button>    
                    </div>
                </div>
            </>
    }
    return(
        <>
        {addPost}
        </>
    )
}
