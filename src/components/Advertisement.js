import React from 'react'

export default function Advertise() {
    var backgroundStyle = {
        // backgroundImage: "url(" + { Background } +") center center / cover no-repeat ",
        // backgroundImage: `url(${Background}) center center / cover no-repeat `,
        // backgroundImage: "{../public/images/banner-bg.png}",
        backgroundImage:
          "url(" + "./images/resources/baner-widgetbg.jpg" + ")"
      };

    return(
        <>
        <div className="widget">
            <div className="banner medium-opacity bluesh">
                <div className="bg-image" style={backgroundStyle}></div>
                <div className="baner-top">
                    <span><img alt="" src="images/book-icon.png"/></span>
                    <i className="fa fa-ellipsis-h"></i>
                </div>
                <div className="banermeta">
                    <p> create your own favourit page. </p>
                    <span>like them all</span>
                    <a data-ripple="" title="" href="#">start now!</a>
                </div>
            </div>											
        </div>
        </>
    )
}