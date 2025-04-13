import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import {Form, useLoaderData, useOutletContext} from 'react-router-dom'

function BoulderForm() {
  const context = useOutletContext()
  const { boulderGyms, gradeOptions } = useLoaderData();
  
  const [formData, setFormData] = useState({
    name: "",
    builderName: "",
    grade: "",
    gym_id: "",
  });

  useEffect(() => {
    if (context !== undefined && context.id !== undefined ) {
      setFormData(prev => ({
        ...prev,
        gym_id: context.id,
      }));
    }
  }, [context]);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
      <Box component={Form} method='post' sx={{ mb: 4 }}>
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
          disabled={context !== undefined}
        >
          {boulderGyms.map((gym) => (
            <MenuItem key={gym.id} value={gym.id}>
              {gym.name} ({gym.city})
            </MenuItem>
          ))}
        </TextField>
        <input type="hidden" name="_action" value="create" />
        <Button type="submit" variant="contained" color="primary">
          Add Boulder
        </Button>
      </Box>
  );
}

export default BoulderForm;
