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
            <div className="user-img header-avatar">
                <img className="fix-header-avatar" src={user.avatar} alt="Avatar"/>
                {/* <span className="status f-online"></span>*/}
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
                <a title="" href="/newsfeed">
                    <p className='logo-charity'>Charity PT</p>
                    {/* <img src="images/logo.png" alt=""/> */}
                </a>
            </div>           
            <div className="top-area">
                <ul className="setting-area">
                    <li>
                        {path}
                    </li>
                </ul>
            </div>
        </div>
        {/* topbar */}
        </>
    )
}