import React from "react";
import AvatarUser from "../components/AvatarUser";
import Friends from "../components/Friends";
import Shortcuts from "../components/Shortcuts";
import Socials from "../components/Socials";

export default function Videos() {
    return(
        <>	
        <div className="theme-layout">
        <AvatarUser />
        <section>
            <div className="gap gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row" id="page-contents">
                                <div className="col-lg-3">
                                    <aside className="sidebar static">
                                        <Shortcuts />
                                    </aside>
                                </div>
                                {/* sidebar */}
                                <div className="col-lg-6">
                                    <div className="central-meta">
                                        <ul className="photos">
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />           
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                            <VideoItem linkVideo="https://www.youtube.com/watch?v=TcwWMNyTVsA&t=385s" />
                                        </ul>
                                        <div className="lodmore"><button className="btn-view btn-load-more"></button></div>
                                    </div>
                                    {/* photos */}
                                </div>
                                {/* centerl meta */}
                                <div className="col-lg-3">
                                    <aside className="sidebar static">
                                        <Socials />
                                        <Friends />
                                    </aside>
                                </div>
                                {/* sidebar */}
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

class VideoItem extends React.Component {
    render() {
        return (
            <>
            <li>
                <a href={this.props.linkVideo} title="" data-strip-group="mygroup" className="strip" data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }">
                    <img src="images/resources/photo1.jpg" alt=""/>
                    <i>
                        <svg version="1.1" className="play" xmlns="http://www.w3.org/2000/LO" xmlnsXlink="http://www.w3.org/1999/xlink" x={"0px"} y={"0px"} height={"40px"} width={"40px"}
                            viewBox="0 0 100 100" enable-background="new 0 0 100 100" xmlSpace="preserve">
                        <path className="stroke-solid" fill="none" stroke=""  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                            C97.3,23.7,75.7,2.3,49.9,2.5"/>
                        <path className="icon" fill="" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
                        </svg>
                    </i>
                </a>
            </li>   
            </>
        )
    }
}