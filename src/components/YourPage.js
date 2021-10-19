import React from 'react'; 

export default function YourPage() {
    return(
        <>
        <div className="widget">
            <h4 className="widget-title">Your page</h4>	
            <div className="your-page">
                <figure>
                    <a href="#" title=""><img src="images/resources/friend-avatar9.jpg" alt=""/></a>
                </figure>
                <div className="page-meta">
                    <a href="#" title="" className="underline">My page</a>
                    <span><i className="ti-comment"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                    <span><i className="ti-bell"></i><a href="insight.html" title="">Notifications <em>2</em></a></span>
                </div>
                <div className="page-likes">
                    <ul className="nav nav-tabs likes-btn">
                        <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">likes</a></li>
                        <li className="nav-item"><a className="" href="#link2" data-toggle="tab">views</a></li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                    <div className="tab-pane active fade show " id="link1" >
                        <span><i className="ti-heart"></i>884</span>
                        <a href="#" title="weekly-likes">35 new likes this week</a>
                        <div className="users-thumb-list">
                            <a href="#" title="Anderw" data-toggle="tooltip">
                                <img src="images/resources/userlist-1.jpg" alt=""/>  
                            </a>
                            <a href="#" title="frank" data-toggle="tooltip">
                                <img src="images/resources/userlist-2.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Sara" data-toggle="tooltip">
                                <img src="images/resources/userlist-3.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Amy" data-toggle="tooltip">
                                <img src="images/resources/userlist-4.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Ema" data-toggle="tooltip">
                                <img src="images/resources/userlist-5.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Sophie" data-toggle="tooltip">
                                <img src="images/resources/userlist-6.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Maria" data-toggle="tooltip">
                                <img src="images/resources/userlist-7.jpg" alt=""/>  
                            </a>  
                        </div>
                    </div>
                    <div className="tab-pane fade" id="link2" >
                        <span><i className="ti-eye"></i>440</span>
                        <a href="#" title="weekly-likes">440 new views this week</a>
                        <div className="users-thumb-list">
                            <a href="#" title="Anderw" data-toggle="tooltip">
                                <img src="images/resources/userlist-1.jpg" alt=""/>  
                            </a>
                            <a href="#" title="frank" data-toggle="tooltip">
                                <img src="images/resources/userlist-2.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Sara" data-toggle="tooltip">
                                <img src="images/resources/userlist-3.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Amy" data-toggle="tooltip">
                                <img src="images/resources/userlist-4.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Ema" data-toggle="tooltip">
                                <img src="images/resources/userlist-5.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Sophie" data-toggle="tooltip">
                                <img src="images/resources/userlist-6.jpg" alt=""/>  
                            </a>
                            <a href="#" title="Maria" data-toggle="tooltip">
                                <img src="images/resources/userlist-7.jpg" alt=""/>  
                            </a>  
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}