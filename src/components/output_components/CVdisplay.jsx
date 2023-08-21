import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import DisplayEducation from "./DisplayEducation";

function CVDisplay({ cvDetails }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
  };

  const paperStyle = {
    color: "#000000",
    bgcolor: "#ffffff",
    width: "100%",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginRight: "5px",
  };

  const valueStyle = {
    marginLeft: "5px",
  };

  return (
    <Container sx={containerStyle}>
      <Paper sx={paperStyle}>
        <div style={sectionStyle}>
          <Typography variant="h5" sx={{marginBottom:3}}>Personal Information</Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <Typography variant="h5">Personal Information</Typography> */}
            <div>
              <div>
                <Typography sx={labelStyle}>First Name:</Typography>
                <Typography sx={valueStyle}>{cvDetails.firstName}</Typography>
              </div>
              <div>
                <Typography sx={labelStyle}>Last Name:</Typography>
                <Typography sx={valueStyle}>{cvDetails.lastName}</Typography>
              </div>
              <div>
                <Typography sx={labelStyle}>Email:</Typography>
                <Typography sx={valueStyle}>{cvDetails.email}</Typography>
              </div>
              <div>
                <Typography sx={labelStyle}>Phone:</Typography>
                <Typography sx={valueStyle}>{cvDetails.phone}</Typography>
              </div>
            </div>
            <div style={{ ...sectionStyle, marginLeft: "auto" }}>
              <div>
                <Typography sx={labelStyle}>Profile Photo:</Typography>
                <img
                  src={cvDetails.photo}
                  alt="Profile Photo"
                  style={{ maxWidth: "100%", maxHeight: "120px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <Typography variant="h5">Work Experience</Typography>
          <div>
            <Typography sx={labelStyle}>Company:</Typography>
            <Typography sx={valueStyle}>{cvDetails.Company}</Typography>
          </div>
          <div>
            <Typography sx={labelStyle}>Position:</Typography>
            <Typography sx={valueStyle}>{cvDetails.Position}</Typography>
          </div>
          <div>
            <Typography sx={labelStyle}>Start Date:</Typography>
            <Typography sx={valueStyle}>{cvDetails.StartDate}</Typography>
          </div>
          <div>
            <Typography sx={labelStyle}>End Date:</Typography>
            <Typography sx={valueStyle}>{cvDetails.EndDate}</Typography>
          </div>
          <div>
            <Typography sx={labelStyle}>Description:</Typography>
            <Typography sx={valueStyle}>{cvDetails.Description}</Typography>
          </div>
        </div>

        <div style={sectionStyle}>
          <Typography variant="h5">Skills</Typography>
          <ul>
            {cvDetails.Skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <Typography variant="h5">Education</Typography>
          <DisplayEducation education={cvDetails.Education} />
        </div>

        <div style={sectionStyle}>
          <Typography variant="h5">Projects</Typography>
          {cvDetails.Projects.map((project, index) => (
            <div key={index}>
              <Typography variant="subtitle1">
                Title: {project.title}
              </Typography>
              <Typography>Description: {project.description}</Typography>
              <Typography>Tech Stack: {project.techStack}</Typography>
            </div>
          ))}
        </div>
      </Paper>
    </Container>
  );
}

export default CVDisplay;
