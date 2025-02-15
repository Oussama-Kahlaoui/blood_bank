import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"; // Adjust the path if necessary

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", padding: "5px", boxShadow: "none" }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ height: "200px", width: "auto" }} />
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          {/* <Button color="error" component={Link} to="/">Home</Button> */}
          <Button color="error" component={Link} to="/donate">Donate</Button>
          <Button color="error" component={Link} to="/request">Request</Button>
          <Button color="error" component={Link} to="/donors">Donors</Button>
          <Button color="error" component={Link} to="/login">Login</Button>
          <Button 
            color="error" 
            component={Link} 
            to="/register" 
            sx={{ 
              fontWeight: "bold",
              backgroundColor: "#d32f2f",
              color: "#fff",
              borderRadius: "30px",
              padding: "5px 15px",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "#b71c1c",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
