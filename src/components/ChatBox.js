import React from 'react';

export default function ChatBox() {
    return(
        <>
        <div className="chat-box">
            <div className="chat-head">
                <span className="status f-online"></span>
                <h6>Bucky Barnes</h6>
                <div className="more">
                    <span><i className="ti-more-alt"></i></span>
                    <span className="close-mesage"><i className="ti-close"></i></span>
                </div>
            </div>
            <div className="chat-list">
                <ul>
                    <ContentChat youme="you" imgUser="./images/resources/chatlist1.jpg" content="Em ơi" />
                    <ContentChat youme="me" imgUser="./images/resources/chatlist2.jpg" content="Gì thầy" />
                    <ContentChat youme="you" imgUser="./images/resources/chatlist1.jpg" content="Làm hòa em ơi" />
                    <ContentChat youme="me" imgUser="./images/resources/chatlist2.jpg" content="Ai gảnh" />
                </ul>
                <form className="text-box">
                    <textarea placeholder="Post enter to post..."></textarea>
                    <div className="add-smiles">
                        <span title="add icon" className="em em-expressionless"></span>
                    </div>
                    <div className="smiles-bunch">
                        <i className="em em---1"></i>
                        <i className="em em-smiley"></i>
                        <i className="em em-anguished"></i>
                        <i className="em em-laughing"></i>
                        <i className="em em-angry"></i>
                        <i className="em em-astonished"></i>
                        <i className="em em-blush"></i>
                        <i className="em em-disappointed"></i>
                        <i className="em em-worried"></i>
                        <i className="em em-kissing_heart"></i>
                        <i className="em em-rage"></i>
                        <i className="em em-stuck_out_tongue"></i>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        </div>
        </>
    )
}

class ContentChat extends React.Component {
    render() {
        return(
            <>
            <li className={this.props.youme}>
                <div className="chat-thumb"><img src={this.props.imgUser} alt=""/></div>
                <div className="notification-event">
                    <span className="chat-message-item">
                        {this.props.content}
                    </span>
                    <span className="notification-date">
                        <time datetime="2004-07-24T18:18" className="entry-date updated">{this.props.time}</time>
                    </span>
                </div>
            </li>
            </>
        )
    }
}