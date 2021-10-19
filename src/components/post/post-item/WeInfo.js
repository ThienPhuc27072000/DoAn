import React from "react";

export default function WeInfo() {
    return(
        <>
        <div className="we-video-info">
            <ul>
                <WeinfoItem class="views" title="views" icon="fa fa-eye" quantity="1.2k"/>
                <WeinfoItem class="comment" title="comments" icon="fa fa-comments-o" quantity="52"/>
                <WeinfoItem class="like" title="like" icon="ti-heart" quantity="2.2k"/>
                <WeinfoItem class="dislike" title="dislike" icon="ti-heart-broken" quantity="200"/>
                <li class="social-media">
                    <IconSocialMedia />
                </li>
            </ul>
            <div className="input-auction">
                <input type="text" placeholder="Input price you want to auction (VNĐ)" /> 
            </div>
            <p className="note-auction">Only enter once</p>
            
        </div>
        </>
    )
}

class WeinfoItem extends React.Component {
    render() {
        return(
            <>
            <li>
                <span className={this.props.class} data-toggle="tooltip" title={this.props.title}>
                    <i className={this.props.icon}></i>
                    <ins>{this.props.quantity}</ins>
                </span>
            </li>
            </>
        )
    }
}

class IconSocialMedia extends React.Component {
    render() {
        return(
            <>
            <div className="menu">
                <div className="btn trigger">
                    <i className="fa fa-share-alt"></i>
                </div>
                <RoraterItem classIcon="fa fa-html5" />
                <RoraterItem classIcon="fa fa-facebook" />
                <RoraterItem classIcon="fa fa-google-plus" />
                <RoraterItem classIcon="fa fa-twitter" />
                <RoraterItem classIcon="fa fa-css3" />
                <RoraterItem classIcon="fa fa-instagram" />
                <RoraterItem classIcon="fa fa-dribbble" />
                <RoraterItem classIcon="fa fa-pinterest" />
            </div>
            </>
        )
    }
}

class RoraterItem extends React.Component {
    render() {
        return(
            <>
            <div className="rotater">
                <div className="btn btn-icon">
                    <a href="#" title=""><i className={this.props.classIcon}></i></a>
                </div>
            </div>
            </>
        )
    }
}