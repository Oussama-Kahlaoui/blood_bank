import { Container, Typography, TextField, Button, Box } from "@mui/material";

function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3, color: "#d32f2f" }}>
        Login
      </Typography>
      <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
      <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 3 }} />
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary">Login</Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
