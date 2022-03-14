import React from "react";

const RegisterForm = ({ handleSubmit, name, setName, email, setEmail, password, setPassword }) => (
    <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 mt-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter Email" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!name || !email || !password}>Submit</button>
        </form>
);

export default RegisterForm;