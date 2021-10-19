import React from "react";
import Shortcuts from "../components/Shortcuts";
import AvatarUser from "../components/AvatarUser";

export default function Photos() {
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
                                {/* sidebar */}
                                <div className="col-lg-6">  
                                    <div className="central-meta">
                                        <ul className="photos">
                                            <PhotoItem imgItem="images/resources/photo-22.jpg" imgLink="images/resources/photo2.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-33.jpg" imgLink="images/resources/photo3.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-44.jpg" imgLink="images/resources/photo4.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-55.jpg" imgLink="images/resources/photo5.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-66.jpg" imgLink="images/resources/photo6.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-77.jpg" imgLink="images/resources/photo7.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-88.jpg" imgLink="images/resources/photo8.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-99.jpg" imgLink="images/resources/photo9.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-101.jpg" imgLink="images/resources/photo10.jpg"/>
                                            <PhotoItem imgItem="images/resources/photo-101.jpg" imgLink="images/resources/photo11.jpg"/>
                                        </ul>
                                        <div className="lodmore"><button className="btn-view btn-load-more"></button></div>
                                    </div>
                                    {/* photos */}
                                </div>
                                {/* centerl meta */}
                                <div className="col-lg-3">
                                    <aside className="sidebar static">
                                        
                                    </aside>
                                </div>       
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

class PhotoItem extends React.Component {
    render() {
        return (
            <>
            <li>
                <a href={this.props.imgItem} className="strip" title="" data-strip-group="mygroup" data-strip-group-options="loop: false">
                    <img src={this.props.imgLink} alt=""/>
                </a>
            </li>
            </>
        )
    }
}