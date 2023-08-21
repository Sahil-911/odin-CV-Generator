import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
} from "@mui/material";
import theme from "./Theme";
import PersonalInfo from "./input_components/PersonalInfo";
import Workexp from "./input_components/Workexp";
import Photo from "./input_components/Photo";
import Skills from "./input_components/Skills";
import Education from "./input_components/Education";
import Projects from "./input_components/Projects";

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
    // position: "fixed", // Set position to fixed
    width: "50%",
    height: "100vh",
    overflowY: "auto",
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
          <Skills />
          <Education />
          <Projects />
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
          <Container sx={{ ...pageContainerStyle }}>
            
          </Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default App;
