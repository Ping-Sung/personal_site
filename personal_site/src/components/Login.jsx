/* eslint-disable no-unused-vars */
import React from 'react'
import '../css/login.css'
import { useNavigate } from "react-router-dom";



export default function Login() {
    const endpoint = "http://localhost:8000/api/token/"

    const [formData, setFormData] = React.useState({
        account: '',
        pwd: ''
    })

    const navigate = useNavigate();
    
    const [isAuthenticated, setIsAuthenticated] = React.useState(localStorage.getItem("authenticated"));

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

    }


    function handleSubmit(event) {
        event.preventDefault()

        const data = {
            'username': formData.account,
            'password': formData.pwd
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        


        fetch(endpoint, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)  
            localStorage.setItem("authenticated", data.token);
            setIsAuthenticated(data.token);
            navigate('/')
        
        })



    }




    return (
        <div className="login-form">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='login-input'
                    type="text"
                    placeholder="username"
                    onChange={handleChange}
                    name="account"
                    value={formData.account}
                />
                <input
                    className='login-input'
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    name="pwd"
                    value={formData.pwd}
                />
                <button className='login-btn'>Log in</button>
            </form>
        </div>

    );

}
