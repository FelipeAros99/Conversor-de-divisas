import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Converter from "./Converter";
const defaultTheme = createTheme();
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = window.localStorage.getItem("SessionState");

    if (isLogged !== "Logged") {
      navigate("/");
    }
  }, [navigate]);

  const handleClick = () => {
    if (window.confirm("¿Esta seguro de cerrar sesion?")) {
      window.localStorage.setItem("SessionState", "");
      window.localStorage.setItem("SessionType", "");
      window.localStorage.setItem("SessionName", "");
      navigate("/");
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Button onClick={handleClick} color="secondary">
          Cerrar sesión
        </Button>
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
            <Box component="form" noValidate>
              <Converter />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
