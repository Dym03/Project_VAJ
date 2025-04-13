import React, { useState, useEffect } from "react";
import { useLoaderData, Form, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

function UpdateBoulderForm() {
  const { boulder, gradeOptions, boulderGyms } = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: boulder.name,
    builderName: boulder.builderName,
    grade: boulder.grade,
    gym_id: boulder.gym_id,
  });

  useEffect(() => {
    setFormData({
      name: boulder.name,
      builderName: boulder.builderName,
      grade: boulder.grade,
      gym_id: boulder.gym_id,
    });
  }, [boulder]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box component={Form} method="post" sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Update Boulder
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Builder Name"
        name="builderName"
        value={formData.builderName}
        onChange={handleChange}
        fullWidth
        required
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
        {gradeOptions.map((g) => (
            <MenuItem key={g} value={g}>
            {g}
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
        {boulderGyms.map((gym) => (
            <MenuItem key={gym.id} value={gym.id}>
            {gym.name} ({gym.city})
            </MenuItem>
        ))}
      </TextField>

      <input type="hidden" name="_action" value="update" />
      <input type="hidden" name="id" value={boulder.id} />
      <Button type="submit" variant="contained" sx={{ mr: 2 }}>
        Save Changes
      </Button>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Cancel
      </Button>
    </Box>
  );
}

export default UpdateBoulderForm;
