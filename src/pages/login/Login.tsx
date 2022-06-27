import React, { useEffect } from "react";
import { Auth } from 'aws-amplify';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    var form = document.getElementById('LoginWindow')
    let navigate = useNavigate()
    async function signIn() {
        try {
            const user = await Auth.signIn(email, password);
            navigate("/");
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    form?.addEventListener('submit', function (event) {
        event.preventDefault();
    })

  return (
    <div className="Registration-window">
      <h2> Sign in </h2>
          <h6> New user? Create an account. </h6>
      <form id="LoginWindow">
        <input
            type="text"
            placeholder="Username or Email Address"
            onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={signIn} placeholder="Sign Up" />
      </form>
      </div>
       
  );
}

export default Login;
