import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <ul className = "App">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Registration">Register Account</Link></li>

        </ul>

    );
}

export default Navbar