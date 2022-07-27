import { Add } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import ChecklistItem from "../checklist-item/Checklist-Item";

interface input {
  title: string;
  items?: IChecklistItem[];
  category: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface IChecklistItem {
  id: string;
  userID: string;
  name: string;
  description: string;
  category: number;
  courseNumber: number;
  hours: number;
  isComplete: boolean;
}

const ChecklistSection = (params: input) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      <Typography component="h1" variant="h5">
        {params.title}
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <Add />
        </IconButton>
      </Typography>
      {params.items?.map((item: IChecklistItem) => (
        <ChecklistItem
          key={item.id}
          id={item.id}
          userID={item.userID || ""}
          name={item.name || ""}
          description={item.description || ""}
          courseNumber={item.courseNumber || 0}
          hours={item.hours || 0}
        />
      ))}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          component="form"
          onSubmit={params.handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: "block",
            alignItems: "center",
            marginTop: 2,
            marginLeft: 2,
            marginRight: 2,
            padding: 2,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          <Stack spacing={3}>
            <TextField
              margin="normal"
              required
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              name="description"
              label="Description"
              id="description"
            />
            <TextField
              margin="normal"
              name="courseNumber"
              label="Course Number"
              id="courseNumber"
            />
            <TextField
              margin="normal"
              name="hours"
              label="Hours Completed"
              id="hours"
            />
            <TextField
              margin="normal"
              name="category"
              label="Category"
              id="category"
              defaultValue={params.category}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default ChecklistSection;
