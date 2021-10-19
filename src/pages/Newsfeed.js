
import React from 'react'
import Advertisement from '../components/Advertisement';
import Friends from '../components/Friends';
import RecentActivity from '../components/RecentActivity';
import Shortcuts from '../components/Shortcuts';
import WhoFollowing from '../components/WhoFollowing';
import YourPage from '../components/YourPage';
import BodyPost from '../components/post/BodyPost';
import NewPostBox from '../components/post/post-item/NewPostBox';
import FormCreatePost from '../components/post/post-item/FormCreatePost';

export default function Newsfeed() {
    return (
        <>
        <div className="theme-layout">
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
                                            <RecentActivity />
                                            {/* recent activites */}
                                            <WhoFollowing />
                                            {/* who's following */}
                                        </aside>
                                    </div>
                                    {/* sidebar */}
                                    <div className="col-lg-6">
                                        {/* add post new box */}
                                        <div className="loadMore">
                                            <NewPostBox />
                                            <BodyPost />
                                        </div>
                                    </div>{/* centerl meta */}
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            <YourPage />
                                            {/* page like widget */}
                                            <Advertisement />
                                            {/*  */}
                                            <Friends />
                                            {/* friends list sidebar */}
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
        <FormCreatePost/>
        </>
    )
}
