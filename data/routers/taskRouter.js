const express = require('express');

const tasks = require('../routers/taskModal');

const routerTasks = express.Router();

// -----------CRUD OPERATIONS -------------

// GET task ------------
routerTasks.get('/', (req, res) => {
    tasks.findTask()
        .then(task => {
            res.status(200).json(task);
        })
        .catch((err) => {
            console.log(error);
            res.status(500).json({
                message: "Ops!, Data couldn't not retrieve the data"
            })
        })
})

// ADD task-------------

routerTasks.put('/', (req, res) => {
    const taskData = req.body;

    if (taskData.name || taskData.description) {
        tasks.addTask(taskData)
            .then(addTask => {
                res.status(201).json(addTask);
            })
            .catch((err) => {
                console.log(error);
                res.status(500).json({
                    errMessage: "Houston, we have a problem! Error w/ database"
                });
            })
    } else {
        res.status(400).json({
            message: "Ops! Please provide correct information into database"
        });
    }
})


//Export Resource
module.exports = routerTasks;