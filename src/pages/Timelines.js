import React from 'react'
import Shortcuts from '../components/Shortcuts'
import AvatarUser from '../components/AvatarUser';
import BodyPost from '../components/post/BodyPost';

export default function Timeline() {
    return(
        <>
        <div className="theme-layout">	 
            <AvatarUser />
            {/* top area */}             
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
                                        <div className="loadMore">
                                            {/* <NewPostBox /> */}
                                            <BodyPost />
                                        </div>
                                    </div>
                                    {/* centerl meta */}
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
