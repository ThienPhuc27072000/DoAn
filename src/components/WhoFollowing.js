import React from 'react';

export default function WhoFollowing() {
    return(
        <>
        <div className="widget stick-widget">
            <h4 className="widget-title">Who's following</h4>
            <ul className="followers">
                <li>
                    <figure><img src="images/resources/friend-avatar2.jpg" alt=""/></figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Kelly Bill</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar4.jpg" alt=""/></figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Issabel</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar6.jpg" alt=""/></figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Andrew</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar8.jpg" alt=""/></figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Sophia</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar3.jpg" alt=""/></figure>
                    <div className="friend-meta">
                        <h4><a href="time-line.html" title="">Allen</a></h4>
                        <a href="#" title="" className="underline">Add Friend</a>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}