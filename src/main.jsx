import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Theme";
import SignInSide from "./components/Signin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
