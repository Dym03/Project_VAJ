import React from "react";
import { Link as RouterLink, useLoaderData } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import BoulderGymsAccordion from "./BoulderGymsAccordeon";

function BoulderGyms() {
  const gymsDict = useLoaderData();

  return (
    <Container sx={{mt: 12}}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: "center"}}>
        Boulder Gyms in Czech Republic
      </Typography>
      <BoulderGymsAccordion gymGroups={gymsDict}/>
    </Container>
  );
}

export default BoulderGyms