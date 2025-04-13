import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  Paper 
} from "@mui/material";

function ActiveBoulders() {
  const [boulders, setBoulders] = useState([]);
  const [gradeOptions, setGradeOptions] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    builderName: "",
    grade: "",
    gym_id: "",
  });

  const fetchBoulders = () => {
    fetch("api/boulders")
      .then((res) => res.json())
      .then((data) => {
        const activeOnly = data.filter((b) => b.active);
        setBoulders(activeOnly);
      });
  };

  const fetchGradeOptions = () => {
    fetch("api/gradeValues")
      .then((res) => res.json())
      .then((data) => {
        setGradeOptions(data);
        setFormData((prev) => ({
          ...prev,
          grade: data[0] || "",
        }));
      });
  };

  const fetchGyms = () => {
    fetch("api/boulderGyms")
      .then((res) => res.json())
      .then((data) => {
        setGyms(data);
        if (data.length > 0) {
          setFormData((prev) => ({
            ...prev,
            gym_id: data[0].id.toString(),
          }));
        }
      });
  };

  useEffect(() => {
    fetchBoulders();
    fetchGradeOptions();
    fetchGyms();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      ...formData,
      id: formData.gym_id, 
      active: true,
    };

    const res = await fetch("api/boulders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setFormData({
        name: "",
        builderName: "",
        grade: gradeOptions[0] || "",
        gym_id: gyms[0]?.id.toString() || "",
      });
      fetchBoulders();
    } else {
      const error = await res.json();
      alert("Failed to add boulder: " + error.error);
    }
  };

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        Active Boulders
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          label="Boulder Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Builder Name"
          name="builderName"
          value={formData.builderName}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        >
          {gradeOptions.map((grade) => (
            <MenuItem key={grade} value={grade}>
              {grade}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Gym"
          name="gym_id"
          value={formData.gym_id}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        >
          {gyms.map((gym) => (
            <MenuItem key={gym.id} value={gym.id}>
              {gym.name} ({gym.city})
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Add Boulder
        </Button>
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
          </Paper>
        ))
      )}
    </Container>
  );
}

export default ActiveBoulders;
