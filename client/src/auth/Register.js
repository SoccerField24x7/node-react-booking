import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import RegisterForm from "../components/RegisterForm";
import { register } from '../actions/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await register({
                name,
                email,
                password
            });

            console.log('REGISTER USER ===> ', response);
            toast.success('Registration successful. Please login.');
            navigate('/login');
        } catch (err) {
            console.log(err);
            if (err.response.status === 400) toast.error(err.response.data);
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