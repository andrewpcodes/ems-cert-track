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
import { API, Auth } from "aws-amplify";
import ChecklistItem from "./checklist-item/Checklist-Item";
import { listChecklists } from "../../graphql/queries";
import { createChecklist } from "../../graphql/mutations";
import { ListChecklistsQuery, User } from "../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useNavigate } from "react-router-dom";
import callGraphQL from "../../utils/callGraphQL";

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

const parseChecklist = (
  cList: GraphQLResult<ListChecklistsQuery>
): IChecklistItem[] => {
  return (
    cList.data?.listChecklists?.items?.map(
      (item) =>
        ({
          id: item?.id,
          userID: item?.userID,
          name: item?.name,
          description: item?.description,
          category: item?.category,
          courseNumber: item?.courseNumber,
          hours: item?.hours,
          isComplete: item?.isComplete,
        } as IChecklistItem)
    ) || []
  );
};

const fetchChecklist = async (id: string) => {
  return await callGraphQL<ListChecklistsQuery>(listChecklists, {
    filter: { userID: { eq: id } },
  });
};

function UserChecklist() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User>();
  const [checklist, setChecklist] = useState<IChecklistItem[]>();

  const navigate = useNavigate();

  const isLoggedIn = async () => {
    try {
      await Auth.currentUserInfo();
      setUser(await Auth.currentUserInfo());
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const getChecklist = async (user: string) => {
      try {
        const cData = await fetchChecklist(user);
        console.log(cData);
        const parsedData = parseChecklist(cData);
        setChecklist(parsedData);
      } catch (e) {
        console.error("Error Fetching Checklist", e);
      }
    };
    if (user && !checklist) {
      getChecklist(user.id);
    } else {
      isLoggedIn();
    }
  }, [user]);

  const create = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const checklistInput = {
      name: data.get("name"),
      userID: user?.id,
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
      {user ? (
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
            {checklist?.map((item: IChecklistItem) => (
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
          </Box>
          {showModal ? (
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
      ) : (
        <p> Please Sign In</p>
      )}
    </>
  );
}

export default UserChecklist;
