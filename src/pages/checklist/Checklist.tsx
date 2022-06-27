import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

function Checklist() {
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
      </Container>
    </>
  );
}

export default Checklist;
