import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import homeBanner from "../img/home_banner.jpg"; // Ensure correct path

function HomePage() {
  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundImage: `url(${homeBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        {/* Overlay for better contrast */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
          }}
        />

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
            position: "relative",
            zIndex: 1,
          }}
        >
          Save Lives, Donate Blood
        </Typography>
      </Box>

      {/* Content Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#444",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Your blood donation can make a difference.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{
              mx: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: "0px 5px 15px rgba(211, 47, 47, 0.4)",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#b71c1c",
                transform: "scale(1.05)",
              },
            }}
            component={Link}
            to="/donate"
          >
            Donate Now
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              mx: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              color: "#d32f2f",
              borderColor: "#d32f2f",
              boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#d32f2f",
                color: "#fff",
                transform: "scale(1.05)",
              },
            }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
