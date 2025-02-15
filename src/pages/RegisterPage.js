import React from "react";
import { Container, Typography, TextField, Button, Box, MenuItem, Paper, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
});

const ImageSection = styled(Box)({
  backgroundImage: `url("https://www.cpsmumbai.org/Uploads/2762023161833920.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  padding: "20px",
});

const FormSection = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  maxWidth: 400,
  width: "100%",
}));

function RegisterPage() {
  return (
    <StyledContainer>
      <ImageSection>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Donate Blood, Save Lives
          </Typography>
          <Typography variant="h6">
            Your donation can bring hope to those in need. Join us today!
          </Typography>
        </Box>
      </ImageSection>
      <FormSection>
        <StyledPaper elevation={3}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 3, color: "#d32f2f" }}>
            Create Account
          </Typography>
          <TextField label="Full Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" type="email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Phone Number" type="tel" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Age" type="number" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField 
            select 
            label="Blood Type" 
            variant="outlined" 
            fullWidth 
            sx={{ mb: 3 }}
          >
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </TextField>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" color="primary">Register</Button>
          </Box>
        </StyledPaper>
      </FormSection>
    </StyledContainer>
  );
}

export default RegisterPage;