import { Button, Container, Input, Typography } from "@mui/material";
import { useState } from "react";
import theme from "./Theme";

function PersonalInfo() {
  const [showMore, setshowMore] = useState(false);

  const handleShow = () => {
    setshowMore(!showMore);
  };

  const divisionStyle = {
    color: "text.primary",
    // height: "100vh",
    display: "flex",
    flexDirection: "row",
    bgcolor: "primary.main",
  };

  const bodyTypo = {
    color: "text.primary",
    // m:3,
  };

  return (
    <Container sx={{ ...divisionStyle, flexDirection: "column" }}>
      <Container sx={{ ...divisionStyle }}>
        <Typography variant="h6">Personal Info</Typography>
        <Button
          onClick={handleShow}
          sx={{ marginLeft: "auto", color: "text.primary" }}
        >
          {showMore ? "▲" : "▼"}
        </Button>
      </Container>
      {showMore && (
        <Typography variant="body1" sx={{ ...bodyTypo }}>
          <Container>
            <Typography variant="boody2">First Name: </Typography>
            <Input type="text" sx={{ marginLeft:'auto'}}></Input>
          </Container>
          <Container>
            <Typography variant="boody2">Last Name: </Typography>
            <Input type="text" sx={{ marginLeft:'auto'}}></Input>
          </Container>
          <Container>
            <Typography variant="boody2">Mobile No: </Typography>
            <Input type="text" sx={{ marginLeft:'auto'}}></Input>
          </Container>
          <Container>
            <Typography variant="boody2">E-mail: </Typography>
            <Input type="text" sx={{ marginLeft:'auto'}}></Input>
          </Container>

        </Typography>
      )}
    </Container>
  );
}

export default PersonalInfo;
