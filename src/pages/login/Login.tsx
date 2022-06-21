import React, { useEffect } from "react";

function Login() {
  return (
    <div className="Registration-window">
      <h2> Sign in </h2>
      <h6> New user? Create an account. </h6>
      <input
        type="text"
        name="field1"
        placeholder="Username or Email Address"
      />
      <input type="password" name="field1" placeholder="Password" />
      <input type="submit" name="field1" placeholder="Sign Up" />
    </div>
  );
}

export default Login;
