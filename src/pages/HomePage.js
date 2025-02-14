import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#d32f2f" }}>
        Save Lives, Donate Blood
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, color: "gray" }}>
        Your blood donation can make a difference.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mx: 2 }}
          component={Link}
          to="/donate"
        >
          Donate Now
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ mx: 2 }}
          component={Link}
          to="/login"
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
