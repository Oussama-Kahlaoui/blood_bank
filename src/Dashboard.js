import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <Typography variant="h4">Bienvenue sur votre tableau de bord</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Se déconnecter
      </Button>
    </Container>
  );
};

export default Dashboard;
