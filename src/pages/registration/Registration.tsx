import React from "react";
import { Auth } from 'aws-amplify';
import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Registration() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [visible, setVisible] = useState(false)
  let navigate = useNavigate()
  var form1 = document.getElementById('FirstWindow')
  var form2 = document.getElementById('SecondWindow')

    async function signUp(e: React.FormEvent<HTMLInputElement>) {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            });
            setVisible(true)
            setEmail(username)
            console.log(user);
        } catch (error) {
            window.alert(error)
            console.log('error signing up:', error);
        }
    }



    async function confirmSignUp(e: React.FormEvent<HTMLInputElement>) {
        try {
            await Auth.confirmSignUp(email, code);
            navigate("/");
            return true
        } catch (error) {
            window.alert(error)
            console.log('error confirming sign up', error);
            e.preventDefault();
        }
    }

    form2?.addEventListener('click', function (event) {
        event.preventDefault();
    })

    form1?.addEventListener('click', function (event) {
        event.preventDefault();
    })

    return (
        <div className="Registration-window">
            
      <h2> Create an account </h2>
      <h6> Already a user? Log in here </h6>
            {!visible &&
                <form id="FirstWindow">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email Address" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <input type="submit" onClick={signUp} placeholder="Sign Up" />
                </form>
            }
            { visible &&
                <form id="SecondWindow">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code" />
                    <input type="submit" onClick={confirmSignUp} placeholder="Register code"/>
                </form>
            }    
       </div>
  );
}

export default Registration;
