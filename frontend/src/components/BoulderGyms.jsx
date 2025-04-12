import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import BoulderGymsAccordion from "./BoulderGymsAccordeon";

function BoulderGyms() {
  const gymsDictInitial = useLoaderData();
  const [gymsDict, setGymsDict] = useState(gymsDictInitial);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "api/boulderGyms",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      const newGym = await res.json();
      setGymsDict((prev) => {
        const updated = { ...prev };
        if (!updated[newGym.city]) {
          updated[newGym.city] = [];
        }
        updated[newGym.city].push({ ...newGym, boulders: [] });
        return { ...updated };
      });

      setFormData({ name: "", city: "", address: "" });
    } else {
      const error = await res.json();
      alert("Failed to create gym: " + error.error);
    }
  };

  return (
    <Container sx={{ mt: 12 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        Boulder Gyms in Czech Republic
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
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

      <BoulderGymsAccordion gymGroups={gymsDict} />
    </Container>
  );
}

export default BoulderGyms;
