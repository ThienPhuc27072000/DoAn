import React from 'react'
import ChatBox from './ChatBox'

export default function Friends() {
    return(
        <>
        <div className="widget friend-list stick-widget">
            <h4 className="widget-title">Friends</h4>
            <div id="searchDir"></div>
            <ul id="people-list" className="friendz-list">
                <FriendItem linkImg="images/resources/friend-avatar.jpg" name="Phúc" />
                <FriendItem linkImg="images/resources/friend-avatar.jpg" name="Bửu" />
                <FriendItem linkImg="images/resources/friend-avatar2.jpg" name="Trung" />
                <FriendItem linkImg="images/resources/friend-avatar3.jpg" name="Khoa" />
                <FriendItem linkImg="images/resources/friend-avatar4.jpg" name="Đạt" />
                <FriendItem linkImg="images/resources/friend-avatar5.jpg" name="Quỳnh" />
                <FriendItem linkImg="images/resources/friend-avatar6.jpg" name="Tín" />
                <FriendItem linkImg="images/resources/friend-avatar7.jpg" name="Trọng" />
                <FriendItem linkImg="images/resources/friend-avatar.jpg" name="Thắng" />
                <FriendItem linkImg="images/resources/friend-avatar.jpg" name="Tư" />
                <FriendItem linkImg="images/resources/friend-avatar2.jpg" name="Yến" />
            </ul>
            <ChatBox />
        </div>
        </>
    )
}

class FriendItem extends React.Component {
    render() {
        return(
            <>
            <li>
                <figure>
                    <img src={this.props.linkImg} alt=""/>
                    <span className="status f-online"></span>
                </figure>
                <div className="friendz-meta">
                    <a href="time-line.html">{this.props.name}</a>
                    {/* <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" 
                            data-cfemail="a0d7c9ced4c5d2d3cfccc4c5d2e0c7cdc1c9cc8ec3cfcd">[email&#160;protected]
                    </a></i> */}
                </div>
            </li>
            </>
        )
    }
}