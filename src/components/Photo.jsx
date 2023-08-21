import React, { useState } from "react";
import { Button, Container, Input, Typography } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function Photo() {
  const [photo, setPhoto] = useState(null);

  const [showMore, setShowMore] = useState(false);

  const handlePhoto = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

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

  const inputStyle = {
    width: "80%",
    padding: "8px",
    borderRadius: "4px",
    maxHeight: "120px",
    overflowY: "auto",
    resize: "none",
    border: "1px solid #ccc",
  };

  return (
    <Container sx={{ ...divisionStyle, flexDirection: "column" }}>
      <Container sx={divisionStyle}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Upload Photo
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
          <Typography variant="body1" sx={{ marginRight: 4 }}>
            Photo:
          </Typography>
          <Input
            type="file"
            onChange={handlePhoto}
            sx={{ ...inputStyle, marginBottom: 2 }}
          />
        </Container>
      )}
    </Container>
  );
}

export default Photo;
