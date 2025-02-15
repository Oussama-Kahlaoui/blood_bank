import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import homeBanner from "../img/v1.mp4";
import m1 from "../img/m1.jpg";
import m2 from "../img/m2.jpg";
import m3 from "../img/m3.jpg";
import infoBlood from "../img/info_blood.jpg";
import compatibility from "../img/compatibility.jpg";
import "./style.css";

function HomePage() {
  const images = [m1, m2, m3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      {/* Video Banner */}
      <Box sx={{ position: "relative", height: "350px", overflow: "hidden" }}>
        <video autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src={homeBanner} type="video/mp4" />
        </video>
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
        <Typography
          variant="h3"
          className="shining-text"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          🩸 Save Lives, Donate Blood 🩸
        </Typography>
      </Box>

      <Divider sx={{ my: 5 }} />

      {/* Image Carousel */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" fontWeight="bold" color="error" gutterBottom>
          Our Mission
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {images.map((img, index) => (
            <Grid item xs={4} key={index}>
              <Paper
                onClick={() => setCurrentImage(index)}
                sx={{
                  p: 1,
                  borderRadius: 2,
                  cursor: "pointer",
                  boxShadow: currentImage === index ? "0px 0px 10px red" : "none",
                }}
              >
                <img src={img} alt={`slide-${index}`} style={{ width: "100%", borderRadius: "8px" }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ my: 5 }} />

      {/* Blood Cycle Section */}
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
          The Blood Cycle
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          From donation to saving lives: The journey of your blood.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { step: "Donation", description: "A donor gives blood at a donation center.", icon: "bi bi-heart" },
            { step: "Processing", description: "Blood is tested, separated, and stored safely.", icon: "bi bi-gear" },
            { step: "Distribution", description: "Hospitals receive blood as needed.", icon: "bi bi-truck" },
            { step: "Transfusion", description: "A patient receives the blood they need.", icon: "bi bi-person-check" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, boxShadow: 3 }}>
                <i className={item.icon} style={{ fontSize: "2rem", color: "#d32f2f" }}></i>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {item.step}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ my: 5 }} />

      {/* Get Connected Section */}
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Get Connected
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Join our platform to find blood donors or request blood for emergencies.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 3 }}>
          <Button variant="contained" color="error" startIcon={<i className="bi bi-heart-fill"></i>}>
            Register as Donor
          </Button>
          <Button variant="contained" color="primary" startIcon={<i className="bi bi-droplet-fill"></i>}>
            Request Blood
          </Button>
        </Box>
      </Container>

      <Divider sx={{ my: 5 }} />
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="secondary"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            letterSpacing: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            textDecoration: "underline",
            textDecorationColor: "secondary.main",
          }}
        >
          About Blood
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <div
              style={{
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                transform: "scale(1)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
            >
              <img
                src={infoBlood}
                alt="Blood Information"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.2)";
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                textAlign: "justify",
                px: { xs: 2, md: 0 },
                background: "rgba(255, 255, 255, 0.7)",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                fontStyle: "italic",
                letterSpacing: 1.5,
              }}
            >
              Blood is essential for human life. It delivers oxygen and nutrients
              to different parts of the body and helps fight infections. Blood
              donation is a crucial practice that saves millions of lives every year.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ my: 5 }} />

      {/* Blood Compatibility Table */}
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" color="error" gutterBottom>
          Blood Compatibility Table
        </Typography>
        <img src={compatibility} alt="Blood Compatibility" style={{ width: "100%", borderRadius: "8px" }} />
      </Container>

      <Divider sx={{ my: 5 }} />

     {/* Footer */}
     <Box sx={{ backgroundColor: "#212529", color: "#fff", py: 3, textAlign: "center" }}>
        <Container>
          <Typography variant="body1">© {new Date().getFullYear()} Blood Donation | All Rights Reserved</Typography>
          <Divider sx={{ my: 2, backgroundColor: "#444" }} />

          {/* Social Media Links */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            {[
              { icon: "bi bi-facebook", link: "#" },
              { icon: "bi bi-twitter", link: "#" },
              { icon: "bi bi-instagram", link: "#" },
              { icon: "bi bi-linkedin", link: "#" },
            ].map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <i className={`${item.icon}`} style={{ fontSize: "1.5rem", color: "#fff" }}></i>
              </a>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;