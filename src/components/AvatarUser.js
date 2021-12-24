import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'react-cookies';
import { logoutUser } from '../actionCreator/UserCreator';

export default function AvatarUser() {
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
        // path = <>
        //     <div className="user-img">
        //         <img src={user.avatar} alt="Avatar"/>
        //         <span className="status f-online"></span>                   
        //     </div>
        //     <div className="user-img username">{user.username}</div>
        //     <div className="user-img username logout" onClick={logout}>
        //         <i class="ti-shift-right"></i>
        //     </div>
        // </> 
    return(
        <>
        <section>
            <div className="feature-photo">
                <figure><img src="images/resources/timeline-1.jpg" alt=""/></figure>
                <div className="add-btn">
                    <span>1205 followers</span>
                    <a href="#" title="" data-ripple="">Add Friend</a>
                </div>
                <form className="edit-phto">
                    {/* <i className="fa fa-camera-retro"></i> */}
                    <label className="fileContainer">Edit Cover Photo
                        <input className="input-img" type="file"/>
                    </label>
                </form>
                <div className="container-fluid">
                    <div className="row merged">
                        <div className="col-lg-2 col-sm-3">
                            <div className="user-avatar">
                                <figure>
                                    <img src={user.avatar} alt=""/>
                                    {/* <img src={user.avatar} alt=""/> */}
                                    <form className="edit-phto">
                                        {/* <i className="fa fa-camera-retro"></i> */}
                                        Edit Display Photo
                                        <label className="fileContainer">
                                            {/* Edit Display Photo */}
                                            <input className="input-img" type="file"/>
                                        </label>
                                    </form>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-10 col-sm-9">
                            <div className="timeline-info">
                                <ul>
                                    <li className="admin-name">
                                        <h5>{user.username}</h5>
                                        {/* <span>Group Admin</span> */}
                                    </li>
                                    <li>
                                        <Path path="/timeline" className="active" title="" data-ripple="" page="Time line" />
                                        <Path path="/messages" className="" title="" data-ripple="" page="Message" />
                                        <Path path="/photos" className="" title="" data-ripple="" page="Photos" />
                                        <Path path="/videos" className="" title="" data-ripple="" page="Videos" />
                                        <Path path="/aboutme" className="" title="" data-ripple="" page="About me" />
                                        <Path path="/" className="" title="" data-ripple="" page="Sign out" />
                                        <Path path="/" className="" title="" data-ripple="" page="Sign out" />
                                        <Path path="/" className="" title="" data-ripple="" page="Sign out" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
class Path extends React.Component {
    render() {
        return(
            <>
                <Link to={this.props.path} className={this.props.isActive} title="" data-ripple="">{this.props.page}</Link>
            </>
        )
    }
}
