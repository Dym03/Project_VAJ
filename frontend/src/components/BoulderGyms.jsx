import React from "react";
import { Outlet, Link as RouterLink, useLoaderData, useLocation} from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import BoulderGymsAccordion from "./BoulderGymsAccordeon";

function BoulderGyms() {
  const gymsDict = useLoaderData();
  const location = useLocation();
  
  const linkTo = location.pathname === "/boulderGyms" ? "/boulderGyms/addGym" : "/boulderGyms";
  return (
    <Container sx={{ mt: 12 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        Boulder Gyms in Czech Republic
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button component={RouterLink} to={linkTo} variant="contained">
          {location.pathname === "/boulderGyms" ? "Open add form" : "Close add form"}
        </Button>
      </Box>
      <Box>
        <Outlet /> 
      </Box>

      <BoulderGymsAccordion gymGroups={gymsDict} />
    </Container>
  );
}

export default BoulderGyms;
