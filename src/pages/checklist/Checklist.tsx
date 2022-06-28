import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Typography,
  Button,
  TextField,
  Stack,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import * as mutations from "../../graphql/mutations";

function Checklist() {
  const [showModal, setShowModal] = useState(false);
  const [cat, setCat] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (!loggedIn) {
      isLoggedIn();
    }
  });

  const isLoggedIn = async () => {
    setUser(await Auth.currentUserInfo());
    if (user) {
      setLoggedIn(true);
      console.log(user);
    }
  };

  const create = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const checklistInput = {
      name: data.get("name"),
      userID: user.id,
      description: data.get("description"),
      courseNumber: data.get("courseNumber"),
      //category: cat,
    };

    console.log(checklistInput);

    await API.graphql({
      query: mutations.createChecklist,
      variables: { input: checklistInput },
    });

    setShowModal(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCat(event.target.value as string);
  };

  return (
    <>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography component="h1" variant="h3">
            Checklist
            <Button onClick={create}>Create</Button>
          </Typography>
          <Divider />
          <Typography component="h1" variant="h6">
            Airway/Respiration/Ventilation - <Chip label="Time: 1.5 hrs" />
          </Typography>
          <Typography component="h1" variant="h6">
            Trauma - <Chip label="Time: 1.5 hrs" />
          </Typography>
          <Typography component="h1" variant="h6">
            Medical - <Chip label="Time: 1.5 hrs" />
          </Typography>
          <Typography component="h1" variant="h6">
            Operations - <Chip label="Time: 5 hrs" />
          </Typography>
          <Typography component="h1" variant="h6">
            Cardiovascular - <Chip label="Time: 6 hrs" />
          </Typography>
        </Box>
        {showModal && loggedIn ? (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
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
              <Select
                labelId="category"
                id="category"
                value={cat}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={1}>Airway/Respiration/Ventilation</MenuItem>
                <MenuItem value={2}>Trauma</MenuItem>
                <MenuItem value={3}>Medical</MenuItem>
                <MenuItem value={4}>Operations</MenuItem>
                <MenuItem value={5}>Cardiovascular</MenuItem>
              </Select>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </>
  );
}

export default Checklist;
