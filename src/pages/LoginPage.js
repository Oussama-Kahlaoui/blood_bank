import { Container, Typography, TextField, Button, Box } from "@mui/material";

function LoginPage() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Login Box */}
      <Box
        sx={{
          width: "100%",
          p: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 3,
            color: "#d32f2f",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2, borderRadius: 1 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 3, borderRadius: 1 }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              py: 1.2,
              borderRadius: 1,
              boxShadow: "0px 5px 15px rgba(211, 47, 47, 0.3)",
              "&:hover": {
                backgroundColor: "#b71c1c",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
