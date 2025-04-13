import React from "react";
import { useParams, Form, useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

function DeleteBoulderForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Are you sure you want to delete this boulder?
      </Typography>
      <Form method="post">
        <input type="hidden" name="_action" value="delete" />
        <input type="hidden" name="id" value={id} />
        <Button type="submit" variant="contained" color="error" sx={{ mr: 2 }}>
          Delete
        </Button>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Form>
    </Box>
  );
}

export default DeleteBoulderForm;
