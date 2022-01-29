import React from "react";
import { useSelector } from 'react-redux';
import { useResolvedPath } from "react-router-dom";

const Home = () => {
    const state = useSelector((state) => state);
    return (
        <div className="container-fluid h1 p-5 text-center">
            Home Page
            <br />
            {JSON.stringify(state)}
        </div>
    )
}

export default Home;