import React from "react";
import { Outlet, useLoaderData, Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import BoulderList from "./BoulderList"

function BoulderGymDetail() {
  const gym = useLoaderData();
  const linkTo = location.pathname === `/boulderGyms/${gym.id}` ? `/boulderGyms/${gym.id}/addBoulder` : `/boulderGyms/${gym.id}`;
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        {gym.name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        {gym.address} • {gym.city}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Button component={RouterLink} to={linkTo} variant="contained">
          {location.pathname === `/boulderGyms/${gym.id}` ? "Open form" : "Close form"}
        </Button>
      </Box>
      <Outlet context={gym}/>
      <BoulderList boulders={gym.boulders} path={`/boulderGyms/${gym.id}`} />
    </Container>
  );
}

export default BoulderGymDetail;
