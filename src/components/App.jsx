import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
} from "@mui/material";
import theme from "./Theme";
import PersonalInfo from "./PersonalInfo";
import Workexp from "./Workexp";
import Photo from "./Photo";

const App = () => {
  const containerCommonStyle = {
    color: "text.primary",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
  };

  const mainContainerStyle = {
    bgcolor: "primary.main",
    justifyContent: "center",
  };

  const leftContainerStyle = {
    bgcolor: "primary.main",
    width: "50%",
  };

  const rightContainerStyle = {
    bgcolor: "background.paper",
    width: "50%",
  };

  const pageContainerStyle = {
    bgcolor: "text.primary",
    color: "primary.main",
    height: "85vh",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ ...containerCommonStyle, ...mainContainerStyle }}>
        <Container
          sx={{
            ...containerCommonStyle,
            ...leftContainerStyle,
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ marginTop: 1 }}>
            Automatic CV Generator
          </Typography>
          <Photo />
          <PersonalInfo />
          <Workexp />
        </Container>
        <Container
          sx={{
            ...containerCommonStyle,
            ...rightContainerStyle,
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ marginTop: 1 }}>
            Page
          </Typography>
          <Container sx={{ ...pageContainerStyle }}></Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default App;
