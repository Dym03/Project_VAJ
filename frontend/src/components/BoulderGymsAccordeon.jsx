import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid } from '@mui/material';
import {Link as RouterLink } from "react-router"

const BoulderGymsAccordion = ({ gymGroups }) => {
  return (
    <div>
      {Object.keys(gymGroups).map((city, index) => (
        <Accordion key={index}>
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" sx={{fontSize: '1.5rem'}}>{city}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {gymGroups[city].map(gym => (
                <Box key={gym.id} sx={{mt: 2, textDecoration: 'none', color: 'inherit'}} component={RouterLink} to={`/boulderGyms/${gym.id}`}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid >
                      <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        {gym.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {gym.address}
                      </Typography>
                    </Grid>

                    <Grid sx={{ textAlign: 'right' , ml: 'auto'}}>
                      {gym.boulders.length > 0 && (
                        <Typography variant="body1" >
                          Number of boulders: {gym.boulders.filter((b) => b.active).length}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default BoulderGymsAccordion;