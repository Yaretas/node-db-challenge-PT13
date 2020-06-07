const express = require("express");
//import helpers database
const db = require('../dbConfig')
const project = require("./projectsModal.js");

const routerProject = express.Router();

// ------------ CRUD Operations ---------------

// Get or Retrieve data from Projects table

routerProject.get("/", (req, res) => {
  project.findProjects()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(error);
      res.status(500).json({
        errMessage: 'Ops!, data could not be retrieved, Try Again :('
      })
    })
});
// ADD data from projects table
routerProject.put("/", (req, res) => {
  const {
    name,
    description
  } = req.body;

  if (!name || !description) {
    res.status(400).json({
      errorMessage: "Please provide name / description / completed in order to continue"
    });
  } else {
    project.insert(name, description)
      .then(newProject => {
        res.status(201).json(newProject);
      })
      .catch(err => {
        res.status(500).json({
          errMessage: "Error while saving Project to database :( "
        });
      })
  }

});

//Export Router
module.exports = routerProject;