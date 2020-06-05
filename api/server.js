const express = require("express");

const projectsRouter = require("../data/Routes/projectsRouter.js");
const resourcesRouter = require("../data/Routes/resourceRouter.js");
const tasksRouter = require("../data/Routes/taskRouter.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    api: "Running",
  });
});

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
