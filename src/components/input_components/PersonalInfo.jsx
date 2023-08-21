import React, { useState } from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function PersonalInfo({ cvDetails, setCVDetails }) {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore(!showMore);
  };
  
  const handleFirstNameChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      firstName: e.target.value,
    }));
  };

  const handleLastNameChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      lastName: e.target.value,
    }));
  };

  const handlePhoneChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      phone: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      email: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      description: e.target.value,
    }));
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
                value={cvDetails.firstName}
                onChange={handleFirstNameChange}
              />
            </Container>
            <Container sx={bodyContainerStyle}>
              <TextField
                type="text"
                variant="outlined"
                label="Last Name"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.lastName}
                onChange={handleLastNameChange}
              />
            </Container>
            <Container sx={bodyContainerStyle}>
              <TextField
                type="text"
                variant="outlined"
                label="Mobile No."
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.phone}
                onChange={handlePhoneChange}
                />
            </Container>
            <Container sx={{ ...bodyContainerStyle, marginBottom: 1 }}>
              <TextField
                type="text"
                variant="outlined"
                label="Email ID"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.email}
                onChange={handleEmailChange}
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
                value={cvDetails.description}
                onChange={handleDescriptionChange}
              />
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default PersonalInfo;
