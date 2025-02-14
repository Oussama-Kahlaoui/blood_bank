import { Container, Typography, Button } from "@mui/material";

function RequestPage() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>Request Blood</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Need a blood donation? Submit your request here.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
        Request Now
      </Button>
    </Container>
  );
}

export default RequestPage;
