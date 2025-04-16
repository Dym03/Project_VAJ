import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { Outlet, Link as RouterLink } from "react-router";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Gyms", path: "/boulderGyms" },
  { label: "Active Boulders", path: "/active_boulders" },
];


function App() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ 
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none', }}>
              App
            </Typography>
            
            {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                }
              }}
            >
              {item.label}
            </Button>
          ))}
          </Toolbar>
      </AppBar>
      <Box sx={{mt: 8}}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;

