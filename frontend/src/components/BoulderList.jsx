import React from "react";
import {
  Typography,
  Paper,
  Box, 
  Button,
  Grid
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import {Link as RouterLink} from "react-router-dom";

function BoulderList( {boulders, path }) { 
  const _path = path
  return (
    <>
      {boulders.length === 0 ? (
        <Typography>No active boulders found.</Typography>
      ) : (
        boulders.map((boulder) => (
          <Paper sx={{ p: 2, mb: 2 }} id={boulder.id} key={boulder.name}>
            <Grid container spacing={2} alignItems="center">
            <Grid>
              <Typography variant="h6">{boulder.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Grade: {boulder.grade} | By: {boulder.builderName} {boulder.gym !== undefined ? `| At: ${boulder.gym.name} (${boulder.gym.city})` : "" } 
              </Typography>
            </Grid>
            <Grid sx={{ textAlign: 'right' , ml: 'auto'}}>
              <Box sx={{ mt: 2 , display: "flex", gap: 2}}>
                <Button
                  variant="outlined"
                  color="error"
                  component={RouterLink}
                  to={`${_path}/delete/${boulder.id}`}
                  >
                  <DeleteIcon />
                </Button>
                {`${_path}/edit/${boulder.id}` !== location ? <Button
                  variant="outlined"
                  component={RouterLink}
                  to={`${_path}/edit/${boulder.id}`}
                  sx={{ mr: 1 }}
                  >
                  <Edit />
                </Button> : ""}
                
            </Box>
            </Grid>
          </Grid>
          </Paper>
        ))
      )}
    </>
  );
}

export default BoulderList;
