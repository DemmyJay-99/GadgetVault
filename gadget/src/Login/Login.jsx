import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import styles from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCartShopping, faComputer, faEnvelope, faEye, faEyeSlash, faLock, faVanShuttle } from '@fortawesome/free-solid-svg-icons'
import image from  '../assets/Logo.png'

const Login = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    })
    const { email, password} = inputValue;
    const handleOnChange = (event) => {
        const {name, value} = event.target
    
    setInputValue({
        ...inputValue,
        [name]: value
    })
}

    const handleError = (err) =>
        toast.error(err, {
        position: "bottom-left",
        theme: "dark"
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
        position: "bottom-left",
        theme: "dark"
        });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const { data } = await axios.post(
            "http://localhost:4000/login",
            {
            ...inputValue,
            },
            { withCredentials: true }
        );
        console.log(data);
        const { success, message } = data;
        if (success) {
            handleSuccess(message);
            setTimeout(() => {
            navigate("/");
            }, 1000);
        } else {
            handleError(message);
        }
        } catch (error) {
        console.log(error);
        }
        setInputValue({
        ...inputValue,
        email: "",
        password: "",
        });
    };
        function revealPassword(){
            const eye = document.getElementById('eye')
            const eyeSlash = document.getElementById('eyeSlash')
            const input = document.getElementById("passwordInput")

            const isOpen = eye.classList.toggle('active');
            if(isOpen){
                eyeSlash.style.display = 'block'
                eye.style.display = 'none' 
                input.type = "text"
            } else{
                eyeSlash.style.display = 'none'
                eye.style.display = 'block' 
                input.type = "password"
            }
    }

    return (
        <div className={styles.formBody}>
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h1>Welcome Back!</h1>
            <h4>Login to your account</h4>
                <div className={styles.inputGroup}>
                    <label htmlFor='email'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        E-mail
                    </label>
                    <div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                    />
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor='password'>
                        <FontAwesomeIcon icon={faLock}/>
                        Password
                    </label>
                    <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        id='passwordInput'
                        onChange={handleOnChange}
                    />
                    <FontAwesomeIcon icon={faEye} className={styles.eye} id='eye' onClick={revealPassword}/>
                    <FontAwesomeIcon icon={faEyeSlash} className={styles.eyeSlash} id='eyeSlash' onClick={revealPassword}/>
                    </div>
                </div>
                <button type="submit">
                    Login
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
                <div className={styles.options}>
                    <div className={styles.first}></div>
                    <p>or</p>
                    <div className={styles.second}></div>
                </div>
                    <Link to={"/signup"}>Create an account</Link>
            </form>
            <ToastContainer />
        </div>
        <div className={styles.gadget}>
            <img src={image}/>
            <h1>Premium Gadgets & Electronics</h1>
            <div className={styles.advert}>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faComputer} className={styles.icon}/>
                   <p>Latest Technology</p> 
                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faVanShuttle} className={styles.icon}/>
                    <p>Fast Delivery</p>
                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>
                    <p> Affordable Prices</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Login