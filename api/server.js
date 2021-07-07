const express = require("express");

const projectRouter = require("../data/routers/projectsRouter.js");
const resourcesRouter = require("../data/routers/resourseRouter.js");
const tasksRouter = require("../data/routers/taskRouter.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    api: "Running",
  });
});

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;