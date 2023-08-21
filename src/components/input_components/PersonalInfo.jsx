import React, { useState } from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function PersonalInfo() {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  const divisionStyle = {
    color: "text.primary",
    display: "flex",
    flexDirection: "row",
    bgcolor: "background.paper",
    my: 0.5,
    borderRadius: 1,
    alignItems: "center",
  };

  const bodyContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const labelStyle = {
    marginRight: "2.4rem",
  };

  const textAreaStyle = {
    width: "80%",
    padding: "8px",
    borderRadius: "4px",
    maxHeight: "120px",
    overflowY: "auto",
    resize: "none",
    border: "1px solid #ccc",
  };

  const TextFieldStyle = {
    width: "80%",
    borderRadius: "4px",
    my: 1,
  };

  return (
    <Container sx={{ ...divisionStyle, flexDirection: "column" }}>
      <Container sx={divisionStyle}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Personal Info
        </Typography>
        <Button
          onClick={handleShow}
          sx={{ marginLeft: "auto", color: "text.primary" }}
        >
          {showMore ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </Container>
      {showMore && (
        <Container sx={bodyContainerStyle}>
          <Container variant="body1">
            <Container sx={bodyContainerStyle}>
              <TextField
                type="text"
                variant="outlined"
                label="First Name"
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={bodyContainerStyle}>
              <TextField
                type="text"
                variant="outlined"
                label="Last Name"
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={bodyContainerStyle}>
              <TextField
                type="text"
                variant="outlined"
                label="Mobile No."
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={{ ...bodyContainerStyle, marginBottom: 1 }}>
              <TextField
                type="text"
                variant="outlined"
                label="Email ID"
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={{ ...bodyContainerStyle, marginBottom: 2 }}>
              <TextField
                multiline
                rows={4}
                placeholder="Tell us about yourself..."
                variant="outlined"
                label="About Yourself"
                fullWidth
              />
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default PersonalInfo;
