import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import { ExpandMore, ExpandLess, Add, Remove } from "@mui/icons-material";

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState([
    { title: "", description: "", techStack: "" },
  ]);

  const handleShow = () => {
    setShowMore(!showMore);
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    const newProjects = [
      ...projects,
      { title: "", description: "", techStack: "" },
    ];
    setProjects(newProjects);
  };

  const handleRemoveProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
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
    flexDirection: "column",
  };

  const inputStyle = {
    // padding: "8px",
    // borderRadius: "4px",
    // maxHeight: "120px",
    // overflowY: "auto",
    // resize: "none",
    // m:1,
    // // border: "1px solid #ccc",
    // marginBottom: 2,
    my: 2,
  };

  const iconStyle = {
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <Container sx={{ ...divisionStyle, flexDirection: "column" }}>
      <Container sx={divisionStyle}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Projects
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
          {projects.map((project, index) => (
            <Container
              key={index}
              sx={{
                ...bodyContainerStyle,
                display: "flex",
                flexDirection: "column",
                marginBottom: 2,
              }}
            >
              <TextField
                label="Title"
                value={project.title}
                onChange={(e) =>
                  handleProjectChange(index, "title", e.target.value)
                }
                sx={{ ...inputStyle, width: "100%" }}
              />
              <TextField
                label="Description"
                value={project.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
                multiline
                rows={3}
                sx={{ ...inputStyle, width: "100%" }}
              />
              <TextField
                label="Tech Stack Used"
                value={project.techStack}
                onChange={(e) =>
                  handleProjectChange(index, "techStack", e.target.value)
                }
                sx={{ ...inputStyle, width: "100%" }}
              />
              <IconButton
                sx={iconStyle}
                onClick={() => handleRemoveProject(index)}
                aria-label="Remove Project"
              >
                <Remove />
              </IconButton>
            </Container>
          ))}
          <IconButton
            sx={iconStyle}
            onClick={handleAddProject}
            aria-label="Add Project"
          >
            <Add />
          </IconButton>
        </Container>
      )}
    </Container>
  );
}

export default Projects;
