"use client";
import {
  Box,
  Button,
  Card,
  TextField,
  InputAdornment,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    if (email === "") {
      setError("Please enter email");
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        console.log("Login successful", data);
        setSuccess(data.message);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to login.", err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          p: 5,
          width: "400px",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
          borderRadius: "15px",
        }}
      >
        <Box component="h1" className="text-3xl font-semibold mb-10">
          Login
        </Box>
        {error && (
          <Box mb={5}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
        {success && (
          <Box mb={5}>
            <Alert severity="success">{success}</Alert>
          </Box>
        )}
        <TextField
          fullWidth
          label="Email"
          id="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleLogin}
          disabled={loading}
          sx={{
            py: 1.5,
            color: "black",
            transition: "transform 0.2s",
            "&:hover": {
              color: "white",
              transform: "scale(1.05)",
            },
          }}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
