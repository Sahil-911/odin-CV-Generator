import React from "react";
import { ThemeProvider, CssBaseline, Container, Typography } from "@mui/material";
import theme from "./Theme";
import PersonalInfo from './PersonalInfo';

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
    bgcolor: 'text.primary',
    color: 'primary.main',
    height: '85vh',
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ ...containerCommonStyle, ...mainContainerStyle }}>
        <Container sx={{ ...containerCommonStyle, ...leftContainerStyle, flexDirection:'column' }}>
          <Typography variant="h4">Automatic CV Generator</Typography>
          <Typography>
            <PersonalInfo/>
          </Typography>
        </Container>
        <Container sx={{ ...containerCommonStyle, ...rightContainerStyle, flexDirection:'column' }}>
          <Typography variant="h4">Page</Typography>
          <Container sx={{...pageContainerStyle}}></Container>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default App;
