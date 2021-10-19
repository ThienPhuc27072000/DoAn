import React, {useState, useRef} from 'react';
import API, { endpoints } from "../../../API";
import { useHistory } from 'react-router';
import cookies from 'react-cookies';
import { useSelector } from 'react-redux';
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function FormCreatePost(props) {
    const [posts, setPosts] = useState(null)
    const [addPostContent, setAddPostContent] = useState(null);
    const [addPostTag, setAddPostTag] = useState([]);
	const addPostImg= useRef(null)
	const history = useHistory()
    const [changed, setChanged] = useState(1)

    const addPost = async (event) => {
        event.preventDefault();
        try {
            let res = await API(endpoints['posts'], {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${cookies.load("access_token")}`
                  },
                data: {
                    "content": addPostContent,
                    "image": addPostImg.current.files[0],
                    // "tags": addPostTag,
                }
            })
            console.info(res.data)
            // posts.push(res.data)
            setPosts(posts)
            setChanged(posts.length)
        } catch (err) {
            console.error(err)
        }  
                
        let addNewPost = async () => {
			const formData = new FormData()
			formData.append("content", addPostContent)
			// formData.append("addPostTag", addPostTag)
            // let files = image.current.files;
            // for (let i = 0; i < files.length; i++) {
            //     formData.append("image_items", files[i])
            // } code của Huy
			formData.append("image", addPostImg.current.files[0])
            try {
                let res = await API(endpoints['posts'], formData, {
                    method: 'POST',
                    headers: {
                        // "Authorization": `Bearer ${cookies.load("access_token")}`,
                        "Content-Type": "multipart/form-data"
                    }
                })
                console.info(res.data)
                history.push("/newsfeed")
            } catch (err) {
                console.error(err)
            }
            // if(addPostContent !== null || addPostImg !== null) {
            //     addNewPost()
            // }
            props.addPost(formData)
        }
    }

    return (
        <>
        <div className="modal-newpost js-modal-newpost">
            <div className="modal-container-newpost">
                <div className="modal-close-newpost js-modal-close-newpost">
                    <i className="ti-close"></i>
                </div>
                <div className="modal-header-newpost">
                    Add New Post
                </div>
                <div className="modal-body-newpost">
                    <form onSubmit={addPost}>
                        <label className="modal-label-newpost" for="">Content</label>
                        <div className="input-add-newpost">
                            <input type="text" className="modal-input-newpost" placeholder="Content"
                                value={addPostContent} onChange={(event) => setAddPostContent(event.target.value)}
                            />
                        </div>
                        <label className="modal-label-newpost" for="">Image</label>
                        <div className="input-add-newpost">
                            <input type="file" className="modal-input-newpost" ref={addPostImg} />
                        </div><label className="modal-label-newpost" for="">Hashtag</label>
                        <div className="input-add-newpost">
                            <input type="text" className="modal-input-newpost" placeholder="Add hashtag"
                                value={addPostTag} onChange={(event) => setAddPostTag(event.target.value)}
                            />
                        </div>
                        <div className="modal-footer-newpost">
                            <button type="submit" id="add-newpost">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </>
    )
}