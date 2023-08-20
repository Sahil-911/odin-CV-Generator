import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Set the dark mode
    primary: {
      main: "#1d294e",
    },
    background: {
      default: "#1d294e",
      paper: "#29417f",
    },
    text: {
      primary: "#f1f6fd",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBottom: "1rem",
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginTop: "1rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontFamily: "Arial, sans-serif",
          fontWeight: 400,
        },
      },
    },
  },
  // Additional theme configurations can go here
});

export default theme;
