import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import API, { endpoints } from '../API';
import { useHistory } from 'react-router';
import cookies from 'react-cookies';
import {Link} from 'react-router-dom';
import '../csslogin/css/main.css';
import '../csslogin/css/util.css';
import '../csslogin/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../csslogin/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
// import '../csslogin/js/main';
// import { loginUser } from '../actionCreator/UserCreator';
// import ImgLogin from '../csslogin/images/bg-01.jpg';



export default function Login() {
    var backgroundLogin = { backgroundImage: "url(" + "../csslogin/images/bg-01.jpg" + ")", };

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const dispatch = useDispatch()
    const history = useHistory()

    const login = async (event) => {
        event.preventDefault();
        try{
            let info = await API.get(endpoints['oauth2-info'])
            let res = await API.post(endpoints['login'], {
                "client_id": info.data.client_id,
                "client_secret": info.data.client_secret,
                // "client_id": "5aWq05nCyCKEtQD8TGPlIMuk6RW5XYOWf9phIq9q",
                // "client_secret": "Asllx0IlBm8MtFKm4bVrTjLAtZzAHVfqC5s2Bo3mrxuj6hfChT2r6LjeGSAE3BIQFHGGkqv7Bc5l8NRufT63BTwLpM4jMvoONIlMhpTjdSXG4NDl8rWHmcZeX1OPKJhe",
                "username": username,
                "password": password,
                'grant_type': "password"
            })
            cookies.save("access_token", res.data.access_token)

            let user = await API.get(endpoints['current-user'], {
                headers: {
                    'Authorization': `Bearer ${cookies.load("access_token")}`
                }
            })
            console.info(user)
            cookies.save("user", user.data)

            // dispatch(loginUser(user.data))
            history.push("/newsfeed")

        }catch(err) {
            console.error(err);
        }
    }
    return(
        <>
        <div className="limiter">
            <div className="container-login100" style={{ backgroundLogin }}>
                <div className="wrap-login100 p-t-30 p-b-50">
                    <span className="login100-form-title p-b-41">
                        Account Login
                    </span>
                    <form className="login100-form validate-form p-b-33 p-t-5" onSubmit={login}>
                        <div className="wrap-input100 validate-input" data-validate="Enter username">
                            <input className="input100" type="text" placeholder="Username" 
                                value={username} onChange={event => setUsername(event.target.value)} />
                            <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <input className="input100" type="password" placeholder="Password" 
                                value={password} onChange={event => setPassword(event.target.value)} />
                            <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                        <div className="tranferRegister">
                            <Link to="/signup" >Register your account </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
