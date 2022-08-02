import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Navbar() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    
    const isLoggedIn = async () => {
      try {
        const cUser = await Auth.currentUserInfo();
        setUser(cUser);
      } catch (e) {
        console.log("Error: ", e);
      }
      };
      if (!user) {
          isLoggedIn();
      }
  });

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
