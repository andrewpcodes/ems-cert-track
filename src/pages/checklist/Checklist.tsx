import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import ChecklistItem from "../../components/checklist-item/Checklist-Item";
import { listChecklists } from "../../graphql/queries";
import { createChecklist } from "../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { Checklist } from "../../API";
import { useNavigate } from "react-router-dom";

function UserChecklist() {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any>();
  const [checklist, setChecklist] = useState<any>(null);
  const [userChecklist, setUserChecklist] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (userChecklist.length === 0) {
      fetchChecklist();
    }
    if (!loggedIn) {
      isLoggedIn();
    }
  });

  useEffect(() => {
    if (checklist == null) fetchChecklist();
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

  async function fetchChecklist() {
    try {
      const result = await API.graphql<GraphQLQuery<typeof listChecklists>>(
        graphqlOperation(listChecklists, {
          filter: { userID: { eq: user.id } },
        })
      );
      setChecklist(result.data);
      setUserChecklist(checklist.listChecklists.items);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const checklistInput = {
      name: data.get("name"),
      userID: user.id,
      description: data.get("description"),
      courseNumber: data.get("courseNumber"),
      hours: data.get("hours"),
    };

    await API.graphql({
      query: createChecklist,
      variables: { input: checklistInput },
    });

    navigate(0);
    setShowModal(false);
  };

  return (
    <>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography component="h1" variant="h3">
            Checklist
            <Button onClick={create}>Create</Button>
          </Typography>
          <Divider className="divider" />
          {userChecklist.map((item: Checklist) => (
            <ChecklistItem
              id={item.id}
              name={item.name || ""}
              description={item.description || ""}
              courseNumber={item.courseNumber || 0}
              hours={item.hours || 0}
            />
          ))}
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

export default UserChecklist;
