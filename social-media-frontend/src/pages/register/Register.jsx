import './register.css'
import { useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory()

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords don't match! Try one more time!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,

            }
            try {
                await axios.post("/auth/register", user);
                history.push("/login")
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SunRider Social</h3>
                    <span className="loginDesc">
                        It's a social ape app, you can try it out if you want
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" ref={username} required className="loginInput" />
                        <input placeholder="Email" type="email" ref={email} required  className="loginInput" />
                        <input placeholder="Password" minLength="6" type="password" 
                        ref={password} required className="loginInput" />
                        <input placeholder="Password Again" minLength="6" type="password" 
                        ref={passwordAgain} required className="loginInput" />
                        <button className="loginRegisterButton">Log into Your Account</button>
                        <button className="loginButton" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}