import React, { useEffect, useState } from "react";
import WeInfo from "./WeInfo";
import { Link } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import API, { endpoints } from "../../../API";
import cookies from "react-cookies";
import LazyLoad from "react-lazyload";

export default function PostCard(props) {
  const [posts, setPosts] = useState(null);
  const [changed, setChanged] = useState(1);
  const postId = props.post.id;

  let path;
  if (props.type === "post") path = `/posts/${props.post.id}`;

  let pathUpdatePost;
  if (props.type === "post") pathUpdatePost = `/updatepost/${props.post.id}`;

  let deletePost = async (event) => {
    event.preventDefault();
    try {
      let res = await API.delete(endpoints["delete-post"](postId), {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });
      setPosts(res.data);
      console.info(res.data);
      posts.push(res.data);
      setPosts(posts);
      setChanged(posts.length);
    } catch (err) {
      console.error(err);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  let tags = props.post.tags;
  if (tags !== null || tags !== undefined) {
    tags = (
      <p>
        {props.post.tags.map((t) => (
          <Badge className="tag" bg="secondary">
            {t.name}
          </Badge>
        ))}
      </p>
    );
  }
  return (
    <>
      <LazyLoad height={100} offset={[-100, 100]}>
        <div className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure className="fix-img-post">
                <img src={props.post.creator.avatar} alt="" />
              </figure>
              <div className="friend-name">
                <ins>
                  <a href="/timeline" title="">
                    {props.post.creator.username}
                  </a>
                </ins>
                <i className="ti-more-alt icon-three-dot">
                  <ul className="choose">
                    <li className="choose-item">
                      <Link to={path}>Post Detail</Link>
                    </li>
                    <li className="choose-item">
                      <Link to={pathUpdatePost}>Update Post</Link>
                    </li>
                    <li className="choose-item" onClick={deletePost}>
                      <Link to="#" onClick={refreshPage}>
                        Delete Post
                      </Link>
                    </li>
                  </ul>
                </i>
              </div>
              <div></div>
              <div className="description">
                {tags}
                <p>{props.post.content}</p>
              </div>
              <div class="post-meta">
                <img src={props.post.image} alt="ảnh bài post"></img>
              </div>
              {/* {img} */}
              <WeInfo postId={props.post.id} />
            </div>
          </div>
        </div>
      </LazyLoad>
    </>
  );
}
