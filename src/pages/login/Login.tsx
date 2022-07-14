import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Button,
  TextField,
  Alert,
  Grid,
  Link,
} from "@mui/material";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (email.length > 0) {
  }

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      navigate("/");
    } catch (error) {
      console.log("error signing in", error);
      setAlert(true);
    }
  }

  async function forgotPassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await Auth.forgotPassword(email);
      setConfirm(true);
    } catch (error) {
      setAlert(true);
    }
  }

  async function confirmForgotPassword(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      navigate("/");
    } catch (error) {
      setAlert(true);
    }
  }

  return (
    <>
      {!visible && (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 16,
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              {alert ? (
                <Alert severity="error">Incorrect Login Info Entered</Alert>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component="button"
                    onClick={() => navigate("/register")}
                    variant="body2"
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component="button"
                    onClick={() => setVisible(true)}
                    variant="body2"
                  >
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}

      {visible && !confirm && (
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
            <Box component="form" onSubmit={forgotPassword} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Forgot Password Code
              </Button>
            </Box>
            {alert ? (
              <Alert severity="error">
                This email was not detected in our system
              </Alert>
            ) : null}
          </Box>
        </Container>
      )}

      {visible && confirm && (
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
            <Box
              component="form"
              onSubmit={confirmForgotPassword}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="code"
                label="code"
                name="code"
                autoComplete="code"
                autoFocus
                onChange={(e) => setCode(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoFocus
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Confirm New Password
              </Button>
            </Box>
            {alert ? (
              <Alert severity="error">Incorrect Reset Info Entered</Alert>
            ) : null}
          </Box>
        </Container>
      )}
    </>
  );
}

export default Login;
