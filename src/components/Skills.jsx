import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Typography,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add, Remove } from "@mui/icons-material";

function Skills() {
  const [showMore, setShowMore] = useState(false);
  const [skills, setSkills] = useState([""]);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    const newSkills = [...skills, ""];
    setSkills(newSkills);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
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
    flexDirection: "column", // Change to column
  };

  const inputStyle = {
    width: "60%",
    padding: "8px",
    borderRadius: "4px",
    maxHeight: "120px",
    overflowY: "auto",
    resize: "none",
    border: "1px solid #ccc",
    marginBottom: 2,
  };

  return (
    <Container sx={{ ...divisionStyle, flexDirection: "column" }}>
      <Container sx={divisionStyle}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Skills
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
          {skills.map((skill, index) => (
            <Container key={index} sx={{...bodyContainerStyle, display:'flex', flexDirection:'row'}}>
              <Input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                sx={{...inputStyle, width:'80%', marginRight:4}}
              />
              <IconButton
                onClick={() => handleRemoveSkill(index)}
                aria-label="Remove Skill"
              >
                <Remove />
              </IconButton>
            </Container>
          ))}
          <IconButton onClick={handleAddSkill} aria-label="Add Skill">
            <Add />
          </IconButton>
        </Container>
      )}
    </Container>
  );
}

export default Skills;
