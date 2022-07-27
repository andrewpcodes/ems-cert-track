import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { listChecklists } from "../../graphql/queries";
import { createChecklist } from "../../graphql/mutations";
import { ListChecklistsQuery, User } from "../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useNavigate } from "react-router-dom";
import callGraphQL from "../../utils/callGraphQL";
import ChecklistSection from "./checklist-section/Checklist-Section";

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
  const [user, setUser] = useState<User>();
  const [checklist, setChecklist] = useState<IChecklistItem[]>();

  const navigate = useNavigate();

  const isLoggedIn = async () => {
    try {
      const cUser = await Auth.currentUserInfo();
      setUser(cUser);
    } catch (e) {
      console.log(e);
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
    } else if (!user) {
      isLoggedIn();
    }
  }, [user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const checklistInput = {
      name: data.get("name"),
      userID: user?.id,
      description: data.get("description"),
      courseNumber: data.get("courseNumber"),
      hours: data.get("hours"),
      category: data.get("category"),
    };

    await API.graphql({
      query: createChecklist,
      variables: { input: checklistInput },
    });

    navigate(0);
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
          {user ? (
            <>
              <Typography component="h1" variant="h3">
                Checklist
              </Typography>
              <Divider className="divider" />
              <ChecklistSection
                title="Airway/Respiration/Ventilation"
                items={checklist?.filter((item) => item.category === 1)}
                handleSubmit={handleSubmit}
                category="1"
              />
              <ChecklistSection
                title="Trauma"
                items={checklist?.filter((item) => item.category === 2)}
                handleSubmit={handleSubmit}
                category="2"
              />
              <ChecklistSection
                title="Medical"
                items={checklist?.filter((item) => item.category === 3)}
                handleSubmit={handleSubmit}
                category="3"
              />
              <ChecklistSection
                title="Operations"
                items={checklist?.filter((item) => item.category === 4)}
                handleSubmit={handleSubmit}
                category="4"
              />
              <ChecklistSection
                title="Cardiovascular"
                items={checklist?.filter((item) => item.category === 5)}
                handleSubmit={handleSubmit}
                category="5"
              />
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
}

export default UserChecklist;
