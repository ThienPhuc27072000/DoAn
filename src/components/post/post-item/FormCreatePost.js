import React, {useState, useRef} from 'react';
import API, { endpoints } from "../../../API";
import { useHistory } from 'react-router';
import cookies from 'react-cookies';

export default function FormCreatePost(props) {
    const [posts, setPosts] = useState(null)
    const [addPostContent, setAddPostContent] = useState(null);
    const [addPostTag, setAddPostTag] = useState([]);
	const addPostImg= useRef()
	const history = useHistory()
                
    let addNewPost = async (event) => {
        event.preventDefault();
		const formData = new FormData()
		formData.append("content", addPostContent)
		formData.append("image", addPostImg.current.files[0])
        formData.append("tags", addPostTag)

        try {
            let res = await API.post(endpoints['posts'], formData, {
                headers: {
                    "Authorization": `Bearer ${cookies.load("access_token")}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            console.info(res.data)
            history.push("/newsfeed")
        } catch (err) {
            console.error(err)
        }
        if(addPostContent === null || addPostImg === null) {
            alert("You have to write content or image let create post")
        }
    }
    const refreshPage = () => {
        window.location.reload();
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
                    <form onSubmit={addNewPost}>
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
                            <button type="submit" id="add-newpost" onClick={refreshPage}>Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </>
    )
}