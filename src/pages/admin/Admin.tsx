import {
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import sendEmail from "../../utils/sendEmail";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { listUsers } from "../../graphql/queries";
import callGraphQL from "../../utils/callGraphQL";
import { useEffect, useState } from "react";
import { Label } from "@mui/icons-material";
import { Container } from "@mui/system";
import { API, Auth } from "aws-amplify";
import EmailIcon from "@mui/icons-material/Email";

interface IUser {
  id: string;
  email: string;
}

let nextToken;

const fetchUsers = async () => {
  const apiName = "AdminQueries";
  const path = "/listUsers";
  const myInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };

  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;
  return rest;
};

const mockData = [
  {
    id: 0,
    email: "apeterson247@gmail.com",
  },
  {
    id: 1,
    email: "test@test.com",
  },
];

const Admin = () => {
  const [users, setUsers] = useState<any[]>();

  useEffect(() => {
    const getUsers = async () => {
      //const data = await fetchUsers();
      setUsers(mockData);
    };
    if (!users) {
      getUsers();
    }
  });

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography variant="h3">Send a Reminder</Typography>
        <Divider />
        {users?.map((u: IUser) => {
          return (
            <div key={u.id}>
              <Typography>
                {u.email}
                <IconButton
                  onClick={() => {
                    sendEmail(u.email);
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Typography>
            </div>
          );
        })}
      </Box>
    </Container>
  );
};

export default Admin;
