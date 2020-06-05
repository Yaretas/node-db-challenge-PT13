const db = require("../data/dbConfig.js");

module.exports = {
  findProjects,
  findProjectsById,
  addProjects,
  deleteProjects,
};

function findProjects() {
  return db("projects");
}

function findProjectsById(id) {
  return db("projects")
    .where({
      id,
    })
    .first();
}

function addProjects(project) {
  db("projects")
    .insert(project)
    .then((id) => {
      return findProjectsById(id[0]);
    });
}

function deleteProjects(id) {
  return db("project").where("id", id).del();
}
