import React, { FormEvent } from "react";
import {
  TextField,
  Container,
  CssBaseline,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const LoginInput = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    try {
      await Auth.signIn(LoginInput.email, LoginInput.password);
      navigate("/");
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={signIn} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
