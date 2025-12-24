import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import styles from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

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
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
        position: "bottom-left",
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

    return (
        <div className={styles.formBody}>
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
            <h2>Login to your account</h2>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Login</button>
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
            <h1>GadgetVault</h1>
        </div>
        </div>
    );
}
export default Login