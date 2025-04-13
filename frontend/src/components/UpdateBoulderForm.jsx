import React, { useState } from "react";
import { useLoaderData, Form, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

function UpdateBoulderForm() {
  const { boulder, gradeOptions } = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: boulder.name,
    builderName: boulder.builderName,
    grade: boulder.grade,
    gym_id: boulder.gym_id,
  });

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
        label="Gym ID"
        name="gym_id"
        value={formData.gym_id}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
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
