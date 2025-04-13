import React from "react";
import {
  Container,
  Typography,
  Box, 
  Button,
} from "@mui/material";
import { Outlet, useLoaderData , useLocation, Link as RouterLink} from "react-router-dom";
import BoulderList from "./BoulderList"

function ActiveBoulders() {
  const boulders = useLoaderData()
  const location = useLocation();
  
  const linkTo = location.pathname === "/active_boulders" ? "/active_boulders/addBoulder" : "/active_boulders";

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        Active Boulders
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button component={RouterLink} to={linkTo} variant="contained">
          {location.pathname === "/active_boulders" ? "Open form" : "Close form"}
        </Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
      
      <BoulderList boulders={boulders} path="/active_boulders"/>
    </Container>
  );
}

export default ActiveBoulders;
