import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'react-cookies';
import { logoutUser } from '../actionCreator/UserCreator';
import { Link } from 'react-router-dom';

export default function Header() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    
    const logout = (event) => {
        event.preventDefault()

        cookies.remove("access_token")
        cookies.remove("user")
        dispatch(logoutUser())       
    }

    let path = <></>
    if(user !== null && user !== undefined)
        path = <>
            <div className="user-img">
                <img src={user.avatar} alt="Avatar"/>
                <span className="status f-online"></span>                   
            </div>
            <div className="user-img username">{user.username}</div>
            
            <div className="user-img username logout" onClick={logout}>
                <Link to='/'><i class="ti-shift-right"></i></Link>
            </div>  
        </> 
            
    return(
        <>
        <div className="topbar stick">
            <div className="logo">
                <a title="" href="/newsfeed"><img src="images/logo.png" alt=""/></a>
            </div>           
            <div className="top-area">
                {/* <div className="search">
                    <form>
                        <input type="text" placeholder="Search..."></input>
                    </form>
                </div> */}
                <ul className="setting-area">
                    <li>
                        <a href="#" title="Home" data-ripple=""><i className="ti-search"></i></a>
                        <div className="searched">
                            <form method="post" className="form-search">
                                <input type="text" placeholder="Search Friend"/>
                                <button data-ripple><i className="ti-search"></i></button>
                            </form>
                        </div>
                    </li>
                    <li>
                        <a href="newsfeed.html" title="Home" data-ripple=""><i className="ti-home"></i></a>
                    </li>
                    <li>
                        <a href="#" title="Notification" data-ripple="">
                            <i className="ti-bell"></i><span>20</span>
                        </a>
                        <div className="dropdowns">
                            <span>4 New Notifications</span>
                            <ul className="drops-menu">
                                <li>
                                    <a href="notifications.html" title="">
                                        <img src="images/resources/thumb-1.jpg" alt=""/>
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag green">New</span>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <img src="images/resources/thumb-2.jpg" alt=""/>
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag red">Reply</span>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <img src="images/resources/thumb-3.jpg" alt=""/>
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag blue">Unseen</span>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <img src="./images/resources/thumb-4.jpg" alt=""/>
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <a href="notifications.html" title="">
                                        <img src="images/resources/thumb-5.jpg" alt=""/>
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </a>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <a href="notifications.html" title="" className="more-mesg">view more</a>
                        </div>
                    </li>
                    {/* tin nhắn */}
                    <li>
                        <a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i></a>
                        <div className="dropdowns languages">
                            <a href="#" title=""><i className="ti-check"></i>English</a>
                            <a href="#" title="">Arabic</a>
                            <a href="#" title="">Dutch</a>
                            <a href="#" title="">French</a>
                        </div>
                    </li>
                    <li>
                        {path}
                    </li>
                </ul>
                {/* <div className="user-img">
                    <img src="images/resources/admin.jpg" alt=""/>
                    <span className="status f-online"></span>                   
                </div> */}
                {/* {path} */}
                {/* <div className="user-img username">Username</div> */}
                {/* <span className="ti-menu main-menu" data-ripple=""></span> */}
            </div>
        </div>
        {/* topbar */}
        </>
    )
}