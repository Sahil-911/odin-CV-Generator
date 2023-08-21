import React, { useState } from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function Education({ cvDetails, setCVDetails }) {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  const handleSchoolNameChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      Education: { ...prevDetails.Education, schoolName: e.target.value },
    }));
  };
  const handleSchoolGradesChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      Education: { ...prevDetails.Education, schoolGrades: e.target.value },
    }));
  };

  const handleCollegeNameChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      Education: { ...prevDetails.Education, collegeName: e.target.value },
    }));
  };

  const handleCollegeDegreeChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      Education: { ...prevDetails.Education, collegeDegree: e.target.value },
    }));
  };

  const handleCollegeGradesChange = (e) => {
    setCVDetails((prevDetails) => ({
      ...prevDetails,
      Education: { ...prevDetails.Education, collegeGrades: e.target.value },
    }));
  };

  const divisionStyle = {
    color: "text.primary",
    display: "flex",
    flexDirection: "column", // Change to column
    bgcolor: "background.paper",
    my: 0.5,
    borderRadius: 1,
    alignItems: "center",
  };

  const bodyContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const TextFieldStyle = {
    width: "80%",
    borderRadius: "4px",
    my: 1,
  };

  return (
    <Container sx={{ ...divisionStyle }}>
      <Container sx={{...divisionStyle, display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
        <Typography variant="h6" sx={{marginBottom: 1 }}>
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
        <Container
          sx={{
            ...bodyContainerStyle,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            variant="body1"
            sx={{
              ...bodyContainerStyle,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container
              sx={{
                ...bodyContainerStyle,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TextField
                type="text"
                variant="outlined"
                label="School Name"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.Education.schoolName}
                onChange={handleSchoolNameChange}
              />
              <TextField
                type="text"
                variant="outlined"
                label="Grades"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.Education.schoolGrades}
                onChange={handleSchoolGradesChange}
              />
            </Container>
          </Container>
          <Container variant="body1" sx={bodyContainerStyle}>
            <Container sx={bodyContainerStyle}>
              <TextField
                type="text"
                variant="outlined"
                label="College Name"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.Education.collegeName}
                onChange={handleCollegeNameChange}
              />
              <TextField
                type="text"
                variant="outlined"
                label="Degree"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.Education.collegeDegree}
                onChange={handleCollegeDegreeChange}
              />
              <TextField
                type="text"
                variant="outlined"
                label="Grades"
                sx={{ ...TextFieldStyle }}
                fullWidth
                value={cvDetails.Education.collegeGrades}
                onChange={handleCollegeGradesChange}
              />
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default Education;
