import React, { useEffect } from "react";
import "./Components.css"

function Registration() {
    useEffect(() => {
        //myFirstTodo();
        //result();
    });


return (
    
    <div className="Registration-window">
        <h2> Create an account </h2>
        <h6> Already a user? Log in here </h6>
        <div>
            <input className="Adjacentboxes" type="text" name="field1" placeholder="First Name" />
            <input className="Adjacentboxes" type="text" name="field1" placeholder="Last Name" />
            </div>
        <input className="Fulllengthbox" type="text" name="field1" placeholder="Email Address" />
        <input className="Fulllengthbox" type="password" name="field1" placeholder="Password" />
        <input className="SignUp" type="submit" name="field1" placeholder="Sign Up" />

            
    </div>
);
}

export default Registration