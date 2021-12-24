import React, { useEffect, useState } from "react";
import Comment from "../components/post/post-item/Comment";
import WeInfo from "../components/post/post-item/WeInfo";
import { Badge, Spinner } from "react-bootstrap";
import API, {endpoints} from "../API";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cookies from "react-cookies";

export default function PostDetail(props) {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [commentContent, setCommentContent] = useState(null)
  const [changed, setChanged] = useState(1)
  let {postId} = useParams()
  let user = useSelector(state => state.user.user)

  useEffect(() => {
    let loadPost = async () => {
      try {
        let res = await API.get(endpoints["post-detail"](postId))
        setPost(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    let loadComments = async () => {
      try {
        let res = await API.get(endpoints["get-comments"](postId))
        setComments(res.data)
      } catch (err) {
          console.error(err)
      }
    }
    loadComments()
    loadPost()    
  }, [changed])

  let addComment = async (event) => {
    event.preventDefault()
    try {
      let res = await API.post(endpoints['add-comment'](postId), {
        "content": commentContent
      }, {
        headers: {
          "Authorization": `Bearer ${cookies.load("access_token")}`
        }
      })
      console.info(res.data)
      comments.push(res.data)
      setComments(comments)
      setChanged(comments.length)
    } catch (err) {
      console.error(err)
    }
  }

  let deletePost = async (event) => {
    event.preventDefault();
    try {
        let res = await API.delete(endpoints['delete-post'](postId), {
            headers: {
                "Authorization": `Bearer ${cookies.load("access_token")}`
              },
        })
        setPost(res.data)
        console.info(res.data)
        post.push(res.data)
        setPost(post)
        setChanged(post.length)
    } catch (err) {
        console.error(err)
    }     
  } 

    const refreshPage = () => {
        window.location.reload();
    }

  if(post === null)
    return <Spinner animation="border" />

  let comment = <em><Link to="/">Login</Link> to comment</em>
  if(user !== null && user !== undefined) {
    comment = 
              <>
                  <div className="comet-avatar fix-img-post">
                      <img src={props.imgAvatar} alt=""/>
                  </div>
                  <div className="post-comt-box">
                      <form onSubmit={addComment} value={commentContent} 
                            onChange={(event) => setCommentContent(event.target.value)}>
                          <textarea placeholder="Post your comment"></textarea>
                          <button type="submit" className="btn-comment">Submit</button>
                      </form>	
                  </div>
              </>
  }
  return(
      <>
      <div className="theme-layout">
        <section>
          <div className="gap gray-bg">
            <div className="container-fluid">
              <div className="row">
                {/* <div className="row" id="page-contents"> */}
                  {/* <div className="col-lg-6"> */}
                    <div className="central-meta item fix-post-area">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure className="img-avatar fix-img-post">
                            <img style={{width: "70%"}} src={post.creator.avatar} alt="" style={{width: "100%"}}/>
                          </figure>
                          <div className="friend-name">
                            <ins>
                              <a href="/timeline" title="">{post.creator.username}</a>
                            </ins>
                            <i className="ti-more-alt icon-three-dot">
                                <ul className="choose">
                                    <li className='choose-item'><Link to="#">Update Post</Link></li>
                                    <li className='choose-item'>
                                        <Link to="/newsfeed" onClick={deletePost}>Delete Post</Link>
                                    </li>
                                </ul>
                            </i>
                          </div>
                          <div className="description-detail">
                            <p>Tag: {post.tags.map(t => <Badge className="tag" bg="secondary"> {t.name} </Badge>)}</p>
                            <p>{post.content}</p>
                          </div>
                          <div class="post-meta">
                            <img src={post.image} alt="ảnh bài post"></img>       
                          </div> 
                          <WeInfo />  
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                  {/* <div className="col-lg-6"> */}
                    <div className="central-meta item fix-cmt-area">
                      <div className="user-post">
                        <div className="friend-info">
                          <h3>Comment Area</h3>
                        </div>
                        {/* Comment */}
                        {comment}
                        <div className="fix-coment-area">              
                          <ul className="we-comet">
                            {comments.map(c => 
                              <Comment commentId={c.id} imgAvatar={c.creator.avatar}
                              nameUser={c.creator.username} timeComment={c.created_date}  
                              contentComment={c.content} />  
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                {/* </div>	 */}
              </div>
            </div>
          </div>	
        </section>         
      </div>
      </>
  )
}
