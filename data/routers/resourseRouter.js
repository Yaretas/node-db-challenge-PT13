const express = require('express');

const resource = require('./resourceModal.js');

const routerResource = express.Router();

// -----------CRUD OPERATIONS -------------

// GET Resource -----------

routerResource.get('/', (req, res) => {
    resource.findResource()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch((err) =>
            res.status(500).json({
                errMessage: "Houston we have a problem, We couldn't retrieve the information"
            })
        )
});

// ADD Resource -----------

routerResource.put('/', (req, res) => {
    const ResourceData = req.body;
    resource.addResource(ResourceData)
        .then(add => {
            res.status(201).json(add);
        })
        .catch((err) => {
            console.log(error);
            res.status(500).json({
                errMessage: "Houston, we have a problem. Please try again"
            });
        })
})

// GET Resources by id ------------

routerResource.get('/:id', (req, res) => {
    const id = req.params;

    resource.findResourceById(id)
        .then(retrieve => {
            if (retrieve) {
                res.status(200).json({
                    retrieve
                });
            } else {
                res.status(404).json({
                    message: "Please provide with the correct id. id was not found."
                });
            }
        })
        .catch((err) => {
            console.log(error);
            res.status(500).json({
                errMessage: "Houston, we have a problem! try again"
            });
        })
})

// DELETE Resources ----------

routerResource.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;

    project.deleteResource(id)
        .then(deleted => {
            if (deleted) {
                res.status(204).json({
                    message: "Resource was removed by user"
                });
            } else {
                res.status(404).json({
                    message: "Resource was not found"
                });
            }
        })
        .catch((err) => {
            console.log(error);
            res.status(500).json({
                errMessage: "Houston, we have a problem! Please try again"
            });
        })
})




//Export Resource
module.exports = routerResource;