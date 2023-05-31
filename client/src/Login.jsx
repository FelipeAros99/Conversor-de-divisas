import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = window.localStorage.getItem("SessionState");
    
    if (isLogged === "Logged") {
      navigate("/home");
    }
  }, [navigate]);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleLogin(data.get("email"), data.get("password"));
  };

  const handleLogin = (email, password) => {
    password = md5(password);
    axios
      .get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/login`, {
        params: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
       
        if (response.data.length === 1) {
          window.localStorage.setItem("SessionState", "Logged");
          window.localStorage.setItem("SessionType", response.data[0].Usu_tipo);
          window.localStorage.setItem("SessionName",response.data[0].Usu_nombre);
          window.localStorage.setItem("SessionId",response.data[0].Usu_id);
          navigate("/home");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      });
    //
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Conversor de divisas
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
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
    </ThemeProvider>
  );
}
