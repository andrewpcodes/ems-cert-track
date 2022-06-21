import React, { useEffect } from "react";
import "./Components.css"

function Login() {
    useEffect(() => {
        //myFirstTodo();
        //result();
    });


    return (

        <div className="Registration-window">
            <h2> Sign in </h2>
            <h6> New user? Create an account. </h6>
            <input className="Fulllengthbox" type="text" name="field1" placeholder="Username or Email Address" />
            <input className="Fulllengthbox" type="password" name="field1" placeholder="Password" />
            <input className="SignUp" type="submit" name="field1" placeholder="Sign Up" />


        </div>
    );
}

export default Login