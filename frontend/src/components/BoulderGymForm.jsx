import React, { useState } from "react";
import { Link as RouterLink, Form } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
} from "@mui/material";

function BoulderGymForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
    component={Form}
    method="post"
    sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "600px",
        margin: "0 auto",
        mb: 4,
    }}
    >
    <TextField
        label="Gym Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
    />
    <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
    />
    <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
    />
    <Button type="submit" variant="contained" color="primary">
        Add Gym
    </Button>
    </Box>
  )
}

export default BoulderGymForm;
