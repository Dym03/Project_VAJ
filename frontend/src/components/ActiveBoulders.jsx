import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box, 
  Button
} from "@mui/material";
import { Outlet, useLoaderData , useLocation, Link as RouterLink} from "react-router-dom";

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
          {location.pathname === "/active_boulders" ? "Open add form" : "Close add form"}
        </Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
      

      {boulders.length === 0 ? (
        <Typography>No active boulders found.</Typography>
      ) : (
        boulders.map((boulder) => (
          <Paper sx={{ p: 2, mb: 2 }} id={boulder.id} key={boulder.name}>
            <Typography variant="h6">{boulder.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Grade: {boulder.grade} | By: {boulder.builderName} | At: {boulder.gym.name} ({boulder.gym.city})
            </Typography>

            <Box sx={{ mt: 2 , display: "flex", gap: 2}}>
              <Button
                variant="outlined"
                color="error"
                component={RouterLink}
                to={`/active_boulders/delete/${boulder.id}`}
              >
                Delete
              </Button>

              <Button
                variant="outlined"
                component={RouterLink}
                to={`/active_boulders/edit/${boulder.id}`}
                sx={{ mr: 1 }}
              >
                Edit
              </Button>
           </Box>

           
          </Paper>
        ))
      )}
    </Container>
  );
}

export default ActiveBoulders;
