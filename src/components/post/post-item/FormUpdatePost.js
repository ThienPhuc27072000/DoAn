import React, {useState, useRef} from 'react';
import API, { endpoints } from "../../../API";
import { useHistory } from 'react-router';
import cookies from 'react-cookies';

export default function FormCreatePost(props) {
    const [updatePostContent, setUpdatePostContent] = useState(null);
    const [updatePostTag, setUpdatePostTag] = useState([]);
	const updatePostImg = useRef()
	const history = useHistory()
                
    let updatePost = async (event) => {
        event.preventDefault();
		const formData = new FormData()
		formData.append("content", updatePostContent)
		formData.append("image", updatePostImg.current.files[0])
        formData.append("tags", updatePostTag)

        try {
            let res = await API.update(endpoints['posts'], formData, {
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
        if(updatePostContent === null || updatePostImg === null) {
            alert("You have to write content or image let create post")
        }
    }
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>
        <div className="modal-updatepost js-modal-update-post">
            <div className="modal-container-updatepost">
                <div className="modal-close-updatepost js-modal-close-update-post">
                    <i className="ti-close"></i>
                </div>
                <div className="modal-header-updatepost">
                    Add New Post
                </div>
                <div className="modal-body-updatepost">
                    <form onSubmit={updatePost}>
                        <label className="modal-label-updatepost" for="">Content</label>
                        <div className="input-add-updatepost">
                            <input type="text" className="modal-input-updatepost" placeholder="Content"
                                value={updatePostContent} onChange={(event) => setUpdatePostContent(event.target.value)}
                            />
                        </div>
                        <label className="modal-label-updatepost" for="">Image</label>
                        <div className="input-add-updatepost">
                            <input type="file" className="modal-input-updatepost" ref={updatePostImg} />
                        </div><label className="modal-label-updatepost" for="">Hashtag</label>
                        <div className="input-add-updatepost">
                            <input type="text" className="modal-input-updatepost" placeholder="Add hashtag"
                                value={updatePostTag} onChange={(event) => setUpdatePostTag(event.target.value)}
                            />
                        </div>
                        <div className="modal-footer-updatepost">
                            <button type="submit" id="update-updatepost" onClick={refreshPage}>Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </>
    )
}
