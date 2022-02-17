import React from "react";
import { useState } from "react";
import axios from 'axios';
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:8000/api/register`, {
                name,
                email,
                password
            });

            console.log('REGISTER USER ===> ', response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <RegisterForm 
                            handleSubmit={handleSubmit}
                            name={name}
                            setName={setName}
                            password={password}
                            setPassword={setPassword}
                            email={email}
                            setEmail={setEmail}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;