import React, {useState, useEffect} from 'react';
import Friends from '../components/Friends';
import Shortcuts from '../components/Shortcuts';
import AvatarUser from '../components/AvatarUser';
import API, {endpoints} from '../API';
import { useSelector } from 'react-redux';



export default function AboutUser(props) {
    const user = useSelector(state => state.user.user)

	// const [user, setUser] = useState(null)
	// useEffect(() => {
	// 	let loadUser = async () => {
	// 	  try {
	// 		let res = await API.get(endpoints["users"])
	// 		setUser(res.data)
	// 	  } catch (err) {
	// 		console.error(err)
	// 	  }
	// 	}
	// 	loadUser()
	// }, [])
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
										<div className="about">
											<div className="personal">
												<h5 className="f-title"><i className="ti-info-alt"></i> Personal Info</h5>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing 
													elit, sed do eiusmod tempor incididunt ut labore et 
													dolore magna aliqua. Ut enim ad minim veniam, quis 
													nostrud exercitation ullamco laboris nisi ut aliquip
													ex ea commodo consequat.
												</p>
											</div>
											<div className="d-flex flex-row mt-2">
												<ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left" >
													<li className="nav-item">
														<a href="#basic" className="nav-link fix-nav-link active" data-toggle="tab" >Basic info</a>
													</li>
													<li className="nav-item">
														<a href="#location" className="nav-link fix-nav-link" data-toggle="tab" >location</a>
													</li>
													<li className="nav-item">
														<a href="#work" className="nav-link fix-nav-link" data-toggle="tab" >work and education</a>
													</li>
													<li className="nav-item">
														<a href="#interest" className="nav-link fix-nav-link" data-toggle="tab"  >interests</a>
													</li>
													<li className="nav-item">
														<a href="#lang" className="nav-link fix-nav-link" data-toggle="tab" >languages</a>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane fade show active" id="basic" >
														<ul className="basics">
															<li><i className="ti-user"></i>{user.username}</li>
															<li><i className="ti-thought"></i>{user.gender}</li>
															<li><i className="ti-mobile"></i>{user.phone}</li>
															{/* <li><i className="ti-email"></i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3c4553494e515d55507c59515d5550125f5351">[email&#160;protected]</a></li> */}
															<li><i className="ti-email"></i>{user.email}</li>
															<li><i className="ti-gift"></i>{user.birthday}</li>
														</ul>
													</div>
													<div className="tab-pane fade" id="location" role="tabpanel">
														<div className="location-map">
															<div id="map-canvas"></div>
														</div>
													</div>
													<div className="tab-pane fade" id="work" role="tabpanel">
														<div>
															
															<a href="#" title="">Envato</a>
															<p>work as autohr in envato themeforest from 2013</p> 
															<ul className="education">
																<li><i className="ti-facebook"></i> BSCS from Oxford University</li>
																<li><i className="ti-twitter"></i> MSCS from Harvard Unversity</li>
															</ul>
														</div>
													</div>
													<div className="tab-pane fade" id="interest" role="tabpanel">
														<ul className="basics">
															<li>Footbal</li>
															<li>internet</li>
															<li>photography</li>
														</ul>
													</div>
													<div className="tab-pane fade" id="lang" role="tabpanel">
														<ul className="basics">
															<li>english</li>
															<li>french</li>
															<li>spanish</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>	
								</div>   
                                {/* centerl meta */}
                                <div className="col-lg-3">
                                    <aside className="sidebar static">
                                        <Friends />
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

class InfoUser extends React.Component {
    render() {
        return(
            <>
            
            </>
        )
    }
}