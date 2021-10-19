import React from 'react'
import { Link } from 'react-router-dom'

export default function Social() {
    return(
        <>
        <div className="widget">
            <h4 className="widget-title">Socials</h4>
            <ul className="socials">
                <SocialItem socialName="facebook" link="#" icon="fa fa-facebook" name="Facebook" amount="45" />
                <li className="twitter">
                    <a title="" href="#"><i className="fa fa-twitter"></i> 
                    <span>twitter</span><ins>25 likes</ins></a>
                </li>
                <li className="google">
                    <a title="" href="#"><i className="fa fa-google"></i> 
                    <span>google</span><ins>35 likes</ins></a>
                </li>
            </ul>
        </div>   
        </>
    )
}

class SocialItem extends React.Component {
    render() {
        return(
            <>
                <li className={this.props.socialName}>
                    <Link to={this.props.link} title={this.props.title}>
                        <i className={this.props.icon}></i> 
                        <span>{this.props.name}</span> 
                        <ins>{this.props.amount} likes</ins>
                    </Link>
                </li>
            </>
        )
    }
}