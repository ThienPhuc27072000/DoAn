import React from "react";
import { Link } from 'react-router-dom';

export default function Shortcuts() {
    return(
        <>
        <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
                <ShortCutItem iconshortcut="ti-clipboard" title="Newsfeed" link="/newsfeed"/>
                <ShortCutItem iconshortcut="ti-mouse-alt" title="Inbox" link="/messages"/>
                <ShortCutItem iconshortcut="ti-files" title="My Page" link="/timeline"/>
                <ShortCutItem iconshortcut="ti-user" title="Friends" link="/newsfeed"/>
                <ShortCutItem iconshortcut="ti-image" title="Images" link="/photos"/>
                <ShortCutItem iconshortcut="ti-video-camera" title="Videos" link="/videos"/>
                <ShortCutItem iconshortcut="ti-comments-smiley" title="Messages" link="/messages"/>
                <ShortCutItem iconshortcut="ti-bell" title="Notifications" link="/newsfeed"/>
                <ShortCutItem iconshortcut="ti-share" title="People Nearby" link="/newsfeed"/>
                <ShortCutItem iconshortcut="fa fa-bar-chart-o" title="Insightss" link="/newsfeed"/>
                <ShortCutItem iconshortcut="ti-power-off" title="Logout" link="/"/>
            </ul>
        </div>
        </>
    )
}

class ShortCutItem extends React.Component {
    render() {
        return (
            <>
            <li>
                <i className={this.props.iconshortcut} ></i>
                <Link to={this.props.link} title="">{this.props.title}</Link>
            </li>
            </>
        )
    }
}