import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d32f2f" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blood Bank
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/donate">Donate</Button>
          <Button color="inherit" component={Link} to="/request">Request</Button>
          <Button color="inherit" component={Link} to="/donors">Donors</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/register" sx={{ fontWeight: "bold" }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
