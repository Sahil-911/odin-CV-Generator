import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Typography,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add, Remove } from "@mui/icons-material";

function Education() {
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

  return (
    <Container sx={{ ...divisionStyle, flexDirection: "column" }}>
      <Container sx={divisionStyle}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Education
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
              <Typography variant="body2" sx={labelStyle}>
                School:
              </Typography>
              <Input type="text" />
            </Container>
            <Container sx={{...bodyContainerStyle, marginBottom:2}}>
              <Typography variant="body2" sx={labelStyle}>
                Degree:
              </Typography>
              <Input type="text" />
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default Education;
