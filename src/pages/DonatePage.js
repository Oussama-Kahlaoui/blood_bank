import { Container, Typography, Button } from "@mui/material";

function DonatePage() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>Donate Blood</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Find the nearest donation center and help save lives.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Become a Donor
      </Button>
    </Container>
  );
}

export default DonatePage;
