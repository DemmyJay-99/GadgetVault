import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast} from "react-toastify"
import styles from '../Login/Login.module.css'
import signupstyles from './Signup.module.css'
import image from  '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faCartShopping, faComputer, faVanShuttle } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: ""
    })
    const { email, password, username} = inputValue
    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        })
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right"
        })
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const { data } = await axios.post("http://localhost:4000/signup", {
                ...inputValue
            }, { withCredentials: true})
            const { success, message } = data
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate("/");
                }, 1000);
            }  else {
            handleError(message)
        }
        } catch(error){
            console.log(error)
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        })
    }
  return (
    <div className={styles.formBody}>
    <div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.signHead}>Create an account</h2>
            <div className={styles.inputGroup}>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Enter Email'
                    onChange={handleOnChange}
                    />
            </div>
            <div className={styles.inputGroup}>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">
            Signup
            <FontAwesomeIcon icon={faArrowRight}/>
        </button>
        <p>Already have an account?</p>
        <Link to={"/login"}>Login</Link>
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
  )
}

export default SignUp