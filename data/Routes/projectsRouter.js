const express = require("express");
//import helpers database
const project = require("../data/Routes/projectsModal");

const routerProject = express.Router();

// ------------ CRUD Operations ---------------

// Get or Retrieve data from Projects table
routerProject.get("/", async (req, res) => {
  try {
    const projectData = await project("project");
    res.json(projectData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errMessage: "Oops!, Problem with the database",
      error: err,
    });
  }
});

// ADD data from projects table
routerProject.add("/", async (req, res) => {
  const addProjectData = req.body;

  try {
    const added = await project("projects").addProjects(addProjectData);
    res.status(201).json(added);
  } catch (err) {
    res.status(500).json({
      errMessage: "Ops!, data could not be added",
      error: err,
    });
  }
});

//Export Router
module.exports = routerProject;
