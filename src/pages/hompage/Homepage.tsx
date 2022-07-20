import { Box, Container, CssBaseline, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h1">
          EMS Cert Track
        </Typography>
      </Box>
    </Container>
  );
};

export default Homepage;
