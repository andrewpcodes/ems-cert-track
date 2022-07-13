import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      isLoggedIn();
    }
  });

  const redirect = (to: string) => {
    navigate(to);
  };

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
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EMS-Cert-Track
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            redirect("/");
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            redirect("/checklist");
          }}
        >
          Checklist
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            redirect("/recertification");
          }}
        >
          Recertification
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            redirect("/Courses");
          }}
        >
          Courses
        </Button>
        {!loggedIn ? (
          <>
            <Button
              color="inherit"
              onClick={() => {
                redirect("/login");
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                redirect("/register");
              }}
            >
              Registration
            </Button>
          </>
        ) : (
          <Button
            color="inherit"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
