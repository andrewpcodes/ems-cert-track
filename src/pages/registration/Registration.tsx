import React from "react";

function Registration() {
  return (
    <div className="Registration-window">
      <h2> Create an account </h2>
      <h6> Already a user? Log in here </h6>
      <div>
        <input type="text" name="field1" placeholder="First Name" />
        <input type="text" name="field1" placeholder="Last Name" />
      </div>
      <input type="text" name="field1" placeholder="Email Address" />
      <input type="password" name="field1" placeholder="Password" />
      <input type="submit" name="field1" placeholder="Sign Up" />
    </div>
  );
}

export default Registration;
