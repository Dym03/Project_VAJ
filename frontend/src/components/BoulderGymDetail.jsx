import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

function BoulderGymDetail() {
  const gym = useLoaderData();
  const { id } = useParams();
  console.log("Loaded gym:", gym);

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        {gym.name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        {gym.address} • {gym.city}
      </Typography>

      {Array.isArray(gym.boulders) && gym.boulders.length > 0 ? (
        gym.boulders.map((boulder) => (
          <Box key={boulder.id} sx={{ mb: 2 }}>
            <Typography variant="h6">{boulder.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Grade: {boulder.grade} | Built by: {boulder.builderName}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography>No boulders set for this gym yet.</Typography>
      )}
    </Container>
  );
}

export default BoulderGymDetail;
