import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import API, { endpoints } from '../API';
import ImgSignup from '../csslogin/images/bg-registration-form-1.jpg';


export default function SignUp() {
	// var backgroundSignup = { backgroundImage: "url(" + "./images/bg-registration-form-1.jpg" + ")", };
	var backgroundSignup = {backgroundImage: "url(" + { ImgSignup } + ")"}
	
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState()
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [confirmPassword, setConfirmPassword] = useState()	
	const [email, setEmail] = useState()
	const [birthday, setBirthday] = useState()
	const [phone, setPhone] = useState()
	const avatar = useRef()
	const [gender, setGender] = useState()
	const history = useHistory()


	const register = (event) => {
		event.preventDefault()
		
		let registerUser = async () => {
			const formData = new FormData()
			formData.append("first_name", firstName)
			formData.append("last_name", lastName)
			formData.append("username", username)
			formData.append("password", password)
			formData.append("email", email)
			formData.append("phone", phone)
			formData.append("birthday", birthday)
			formData.append("avatar", avatar.current.files[0])
			formData.append("gender", gender)

			try {
				let res = await API.post(endpoints['register'], formData, {
					headers: {
						"Content-Type": "multipart/form-data"
					}
				})
				console.info(res.data)
				history.push("/")
			} catch (err) {
				console.error(err)
			}
		}

		if(password !== null && password === confirmPassword) {
			registerUser()
		}
	}

	return(
		<>
		<div className="wrapper" style={{backgroundSignup}}>
			<div className="inner">
				<div className="image-holder">
					<img src="images/registration-form-1.jpg" alt=""/>
				</div>
				<form action="" onSubmit={register}>
					<h3>Registration Form</h3>
					<div className="form-group-name">
						<input value={firstName} onChange={(event) => setFirstName(event.target.value)}
								type="text" placeholder="First Name" className="form-control" required/>
						<input value={lastName} onChange={(event) => setLastName(event.target.value)}
								type="text" placeholder="Last Name" className="form-control" required/>
					</div>
					<div className="form-wrapper">
						<input value={username} onChange={(event) => setUsername(event.target.value)}
							type="text" placeholder="Username" className="form-control" required/>
						<i className="zmdi zmdi-account"></i>
					</div>
					<div className="form-wrapper">
						<input value={email} onChange={(event) => setEmail(event.target.value)}
							type="email" placeholder="Email Address" className="form-control" required/>
						<i className="zmdi zmdi-email"></i>
					</div>
					<div className="form-wrapper">
						<select name="" id="" className="form-control" required
								value={gender} onChange={(event) => setGender(event.target.value)}>
							<option disabled selected>Gender</option>
							<option value="male">Male</option>
							<option value="femal">Female</option>
							<option value="other">Other</option>
						</select>
						<i className="zmdi zmdi-caret-down" style={{fontSize: "17px"}}></i>
					</div>
					<div className="form-group-name">
						<input type="date" placeholder="Birthday" className="form-control" required
							value={birthday} onChange={(event) => setBirthday(event.target.value)} />
						<input type="number" placeholder="Phone" className="form-control" required
							value={phone} onChange={(event) => setPhone(event.target.value)} maxlength="10" />
					</div>
					<div className="form-wrapper">
						<input type="password" placeholder="Password" className="form-control" required
							value={password} onChange={(event) => setPassword(event.target.value)} />
						<i className="zmdi zmdi-lock"></i>
					</div>
					<div className="form-wrapper">
						<input type="password" placeholder="Confirm Password" className="form-control" required
							value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
						<i className="zmdi zmdi-lock"></i>
					</div>
					<div className="form-wrapper">
						<input type="file" placeholder="Avatar" className="form-control" required
							ref={avatar} />
						<i className="zmdi zmdi-image"></i>
					</div>
					<button>Register
						<i className="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
		</>
	)
}