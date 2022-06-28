import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      isLoggedIn();
    }
  });

  const isLoggedIn = async () => {
    if (await Auth.currentUserInfo()) {
      setLoggedIn(true);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      navigate(0);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <ul>
      <li>
        <Link
          to="/"
          onClick={() => {
            navigate(0);
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link to="/checklist">Checklist</Link>
      </li>
      <li>
        <Link to="/rectification">Rectification</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      {!loggedIn ? (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register Account</Link>
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Link>
        </li>
      )}
    </ul>
  );
}

export default Navbar;
