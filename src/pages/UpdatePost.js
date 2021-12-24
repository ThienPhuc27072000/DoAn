import React, {useState, useRef} from 'react';
import API, { endpoints } from "../API";
import { useHistory } from 'react-router';
import cookies from 'react-cookies';
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router";


export default function FormCreatePost(props) {
    const [updatePostContent, setUpdatePostContent] = useState(null);
    const [updatePostTag, setUpdatePostTag] = useState([]);
	const updatePostImg = useRef()
	const history = useHistory()
    // const postId = props.postId
    let {postId} = useParams()
                
    let updatePost = async (event) => {
        event.preventDefault();
		const formData = new FormData()
		formData.append("content", updatePostContent)
		formData.append("image", updatePostImg.current.files[0])
        formData.append("tags", updatePostTag)

        try {
            let res = await API.patch(endpoints['update-post'](postId), formData, {
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
            alert("You have to write content or image let update post")
        }
    }
    // const refreshPage = () => {
    //     window.location.reload();
    // }
    return (
        <>
        <div className="page-update-post">
        <Form onSubmit={updatePost}>
            <h3 className="label-updatepost">Update Post</h3>
            <Form.Label>Content</Form.Label>               
                <Form.Control className="fix-input-updatepost" type="text" 
                    value={updatePostContent} onChange={(event) => setUpdatePostContent(event.target.value)}
                />           
            <Form.Label>Tag</Form.Label>
                <Form.Control className="fix-input-updatepost" type="text" 
                    value={updatePostTag} onChange={(event) => setUpdatePostTag(event.target.value)}
                />          
            <Form.Label>Image</Form.Label>           
                <Form.Control className="fix-input-updatepost" type="file" ref={updatePostImg}/>          
            <Button variant="primary" type="submit" style={{margin: "10px 330px 10px"}}>
                Submit
            </Button>
        </Form>
        </div>
        </>
    )
}