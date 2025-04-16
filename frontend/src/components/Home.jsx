import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link as RouterLink} from "react-router";
import {
  Container,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';


function Home() {

  const routes = [
    {
      name: "Boulder Gyms",
      path: "/boulderGyms",
      description: "Boulder gyms from Czech Republic grouped by cities"
    },
    {
      name: "Add Boulder Gym",
      path: "/boulderGyms/addGym",
      description: "Form to add a new boulder gym"
    },
    {
      name: "Active Boulders",
      path: "/active_boulders",
      description: "Listing of all active boulders from all gyms"
    },
    {
      name: "Add Boulder (General)",
      path: "/active_boulders/addBoulder",
      description: "Form to add a new boulder"
    },
  ];
  
  return (
        <Container maxWidth="md" sx={{mt:14}}>
        <Box textAlign="center" mt={8} mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
            Created By <br/>
            Jan Dymáček (Dym0018) & Patrik Ječmínek (JEC0013)
        </Typography>
        </Box>

        <Card elevation={3}>
        <CardContent>
            <Typography variant="h5" gutterBottom align="center">
            Explore the Pages
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List disablePadding>
            {routes.map((route, index) => (
                <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                        <Typography variant="subtitle1" color="primary" fontWeight="medium" component={RouterLink} to={route.path}>
                        {route.name}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="body2" color="text.secondary">
                        {route.description}
                        </Typography>
                    }
                    />
                </ListItem>
                {index !== routes.length - 1 && <Divider component="li" />}
                </React.Fragment>
            ))}
            </List>
        </CardContent>
        </Card>
    </Container>
  );
}

export default Home;