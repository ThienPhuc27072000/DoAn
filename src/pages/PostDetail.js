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
    loadPost()
    loadComments()
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

  if(post === null)
    return <Spinner animation="border" />

  let comment = <em><Link to="/">Login</Link> to comment</em>
  if(user !== null && user !== undefined) {
    comment = 
              <>
                  <div className="comet-avatar">
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
                <div className="row" id="page-contents">
                  <div className="col-lg-6">
                      <div className="central-meta item">
                        <div className="user-post">
                          <div className="friend-info">
                            <figure className="img-avatar">
                              <img style={{width: "70%"}} src={post.creator.avatar} alt="" />
                            </figure>
                            <div className="friend-name">
                              <ins>
                                <a href="/timeline" title="">{post.creator.username}</a>
                              </ins>
                            </div>
                            <div className="description-detail">
                              <p>Tag: {post.tags.map(t => <Badge className="tag" bg="secondary"> {t.name} </Badge>)}</p>
                              {/* <p>Title: {post.title}</p> */}
                              <p>{post.content}</p>
                            </div>
                            <div class="post-meta">
                              {/* <iframe width="560" height="315" title="YouTube video player"
                                  src="https://www.youtube.com/embed/TTaTni6y464"  
                                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                  encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                              </iframe> */}
                              <img src={post.image} alt="ảnh bài post"></img>       
                            </div> 
                            <WeInfo />  
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <h3>Comment Area</h3>
                        </div>
                        {/* Comment */}
                        {comment}
                        <div className="fix-coment-area">
                          
                          <ul className="we-comet">
                            {comments.map(c => 
                              <Comment imgAvatar={c.creator.avatar}
                              nameUser={c.creator.username} timeComment={c.created_date}  
                              contentComment={c.content} />  
                            )}
                            {/* <li><a href="#" title="" className="showmore underline">More comments</a></li> */}
                            {/* <li className="post-comment"></li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
          </div>	
        </section>         
      </div>
      </>
  )
}
