import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import './navbar.css';

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
    <ul className="navbar-ul">
      <li className="navbar-li">
        <Link className="navbar-link" to="/">Home</Link>
      </li>
      <li className="navbar-li">
        <Link className="navbar-link" to="/checklist">Checklist</Link>
      </li>
      <li className="navbar-li">
        <Link className="navbar-link" to="/recertification">Recertification</Link>
      </li>
      <li className="navbar-li">
        <Link className="navbar-link" to="/courses">Courses</Link>
      </li>
      {!loggedIn ? (
        <>
          <li className="navbar-li">
            <Link className="navbar-link" to="/login">Login</Link>
          </li>
          <li className="navbar-li">
            <Link className="navbar-link" to="/register">Register Account</Link>
          </li>
        </>
      ) : (
        <li className="navbar-li">
          <Link className="navbar-link"
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
