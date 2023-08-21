import React, { useState } from "react";
import { Button, Container, Input, Typography, TextField } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function Workexp() {
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
    // alignItems: "center",
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
          Work Experience
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
                label="Company"
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={bodyContainerStyle}>
            <TextField
                type="text"
                variant="outlined"
                label="Position"
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={{...bodyContainerStyle, display:'flex', flexDirection:'column'}}>
              <Typography variant="body1" sx={{ ...labelStyle }}>
                Start Date:
              </Typography>
            <TextField
                type="Date"
                variant="outlined"
                // label="Start Date"
                sx={{ ...TextFieldStyle }}
                fullWidth
              />
            </Container>
            <Container sx={{...bodyContainerStyle, display:'flex', flexDirection:'column'}}>
              <Typography variant="body1" sx={{ ...labelStyle }}>
                End Date:
              </Typography>
            <TextField
                type="Date"
                variant="outlined"
                // label="End Date"
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

export default Workexp;
