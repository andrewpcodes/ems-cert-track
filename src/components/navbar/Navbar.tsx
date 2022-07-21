import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Navbar() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  //Use Effect for collection the User
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(data);
  }, [user]);

  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        await Auth.currentUserInfo();
        setUser(await Auth.currentUserInfo());
        localStorage.setItem("user", user || "");
        return true;
      } catch {
        return false;
      }
    };
    if (!user) {
      isLoggedIn();
    }
  }, []);

  const redirect = (to: string) => {
    navigate(to);
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
        {!user ? (
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
          <>
            <Button
              color="inherit"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </Button>

            <Button
              color="inherit"
              onClick={() => {
                redirect("/profile");
              }}
            >
              Profile
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
