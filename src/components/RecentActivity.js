import React from 'react'

export default function RecentActivity() {
    return(
        <>
        <div className="widget">
        <h4 className="widget-title">Recent Activity</h4>
        <ul className="activitiez">
            <li>
                <div className="activity-meta">
                    <i>10 hours Ago</i>
                    <span><a href="#" title="">ComVideo posted </a></span>
                    <h6>by <a href="time-line.html">bl</a></h6>
                </div>
            </li>
            <li>
                <div className="activity-meta">
                    <i>30 Days Ago</i>
                    <span><a href="#" title="">Postatus. “Hello guys, how are you?”</a></span>
                </div>
            </li>
            <li>
                <div className="activity-meta">
                    <i>2 Years Ago</i>
                    <span><a href="#" title="">Share aher timeline.</a></span>
                    <h6>"<a href="#">you are so funny </a>"</h6>
                </div>
            </li>
        </ul>
        </div>
        </>
    )
}