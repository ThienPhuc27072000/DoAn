import React from "react";
import Shortcuts from "../components/Shortcuts";
import Socials from "../components/Socials";
import AvatarUser from "../components/AvatarUser";
import Friends from "../components/Friends";


export default function AllMessage() {
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
                                        {/* Shortcuts */}
                                    </aside>
                                </div>
                                <div className="col-lg-6">
                                    <div className="central-meta">
                                        <div className="messages">
                                            <h5 className="f-title">
                                                <i className="ti-bell"></i>All Messages <span className="more-options"><i className="fa fa-ellipsis-h"></i></span></h5>
                                            <div className="message-box">
                                                <ul className="peoples">                                                   
                                                    <Peoples linkImage="images/resources/friend-avatar.jpg" peopleName="Bửu" />
                                                    <Peoples linkImage="images/resources/friend-avatar9.jpg" peopleName="Trọng" />
                                                    <Peoples linkImage="images/resources/friend-avatar2.jpg" peopleName="Trung" />
                                                    <Peoples linkImage="images/resources/friend-avatar3.jpg" peopleName="Phúc" />
                                                    <Peoples linkImage="images/resources/friend-avatar4.jpg" peopleName="Huy" />
                                                    <Peoples linkImage="images/resources/friend-avatar5.jpg" peopleName="Yến" />
                                                    <Peoples linkImage="images/resources/friend-avatar6.jpg" peopleName="Tín" />
                                                    <Peoples linkImage="images/resources/friend-avatar7.jpg" peopleName="Khoa" />
                                                    <Peoples linkImage="images/resources/friend-avatar8.jpg" peopleName="Phước" />
                                                </ul>
                                                <div className="peoples-mesg-box">
                                                    <div className="conversation-head">
                                                        <figure><img src="images/resources/friend-avatar.jpg" alt=""/></figure>
                                                        <span>Hoàng Bửu <i>online</i></span>
                                                    </div>
                                                    <ul className="chatting-area">
                                                        <ChatContent youme="you" imgUser="images/resources/userlist-2.jpg" 
                                                                content="Hello" />
                                                        <ChatContent youme="me" imgUser="images/resources/userlist-1.jpg" 
                                                                content="Hi" />
                                                        <ChatContent youme="me" imgUser="images/resources/userlist-2.jpg" 
                                                                content="Chào cậu" />
                                                        <ChatContent youme="you" imgUser="images/resources/userlist-1.jpg" 
                                                                content="Chào cậu" />
                                                        <ChatContent youme="me" imgUser="images/resources/userlist-2.jpg" 
                                                                content="Bai" />
                                                        <ChatContent youme="you" imgUser="images/resources/userlist-1.jpg" 
                                                                content="Bai" />
                                                        {/* <ChatContent youme="me" imgUser="images/resources/userlist-2.jpg" 
                                                                content="thế t hỏi Khoa" /> */}
                                                    </ul>
                                                    <div className="message-text-container">
                                                        <form method="post">
                                                            <textarea></textarea>
                                                            <button title="send"><i className="fa fa-paper-plane"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                                {/* centerl meta */}
                                <div className="col-lg-3">
                                    <aside className="sidebar static">   
                                    <Socials />    
                                        {/* social */}
                                    <Friends />  
                                        {/* who's following  */}
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

class Peoples extends React.Component {
    render() {
        return (
            <>
            <li>                                                       
                <figure>
                    <img src={this.props.linkImage} alt=""/>
                    <span className="status f-online"></span>
                </figure>
                <div className="people-name">
                    <span>{this.props.peopleName}</span>
                </div>
            </li>
            </>
        )
    }
}

class ChatContent extends React.Component {
    render(){
        return(
            <>
            <li className={this.props.youme}>
                <figure><img src={this.props.imgUser} alt=""/></figure>
                <p>{this.props.content}</p>
            </li>
            </>
        )
    }
}