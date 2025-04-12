import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";

function ActiveBoulders() {
  const [boulders, setBoulders] = useState([]);

  useEffect(() => {
    fetch("https://special-guide-q7767jrrv774f65wv-3000.app.github.dev/api/boulders")
      .then((res) => res.json())
      .then((data) => {
        const activeOnly = data.filter((b) => b.active);
        setBoulders(activeOnly);
      });
  }, []);

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        Active Boulders
      </Typography>
      {boulders.length === 0 ? ( 
        <Typography>No active boulders found.</Typography>
      ) : (
        boulders.map((boulder) => (
          <Box key={boulder.id} sx={{ mb: 2 }}>
            <Typography variant="h6">{boulder.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Grade: {boulder.grade} | By: {boulder.builderName}
            </Typography>
          </Box>
        ))
      )}
    </Container>
  );
}

export default ActiveBoulders;
