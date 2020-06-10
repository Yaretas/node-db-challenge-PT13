const express = require("express");
//import helpers database

const project = require("../routers/projectsModal");

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

// ADD data from projects table ---------

routerProject.post('/', (req, res) => {
  const projectData = req.body;
  if (!projectData.Name || !projectData.Description) {
    res.status(400).json({
      errorMessage: 'Please provide name / description / completed in order to continue',
    });
  } else {
    project
      .addProjects(projectData)
      .then((newProject) => {
        res.status(201).json(newProject);
      })
      .catch((err) => {
        res
          .status(500)
          .json({
            errMessage: 'Error while saving Project to database :( '
          });
      });
  }
});

//Delete Projects -------

routerProject.put('/:id', (req, res) => {
  const {
    id
  } = req.params;

  project.deleteProjects(id)
    .then(deleted => {
      if (deleted) {
        res.status(204).json({
          message: "Project was removed by user"
        });
      } else {
        res.status(404).json({
          message: "Project was not found"
        });
      }
    })
    .catch(err => {
      res.status(501).json({
        errMessage: "Houston, we have a problem! Action"
      });
    })
})


//Export Router
module.exports = routerProject;