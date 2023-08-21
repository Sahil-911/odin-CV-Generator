import React, { useState } from "react";
import { Button, Container, Input, Typography, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess, Delete } from "@mui/icons-material";

function Photo({ accept, inputLabel, cvDetails, setCVDetails }) {
  const [photo, setPhoto] = useState(cvDetails.photo || null);
  const [showMore, setShowMore] = useState(false);

  const handlePhoto = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      photo: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleClearPhoto = () => {
    setPhoto(null);
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      photo: null,
    }));
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
    width: "60%",
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
          <Typography variant="body1" sx={{ mx: 3.5, paddingBottom: 2 }}>
            {inputLabel || "Photo"}:
          </Typography>
          <Input
            type="file"
            accept={accept || "image/*"}
            onChange={handlePhoto}
            sx={{ ...inputStyle, marginBottom: 2 }}
          />
          {photo && (
            <div>
              <img
                src={photo}
                alt="Uploaded"
                style={{ maxHeight: "200px" }}
              />
              <IconButton
                onClick={handleClearPhoto}
                aria-label="Clear Photo"
                sx={{ color: "error.main" }}
              >
                <Delete />
              </IconButton>
            </div>
          )}
        </Container>
      )}
    </Container>
  );
}

export default Photo;
