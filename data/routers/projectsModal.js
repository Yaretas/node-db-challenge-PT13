const db = require("../dbConfig.js");

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
  return db('projects').where({
    id
  }).first();
}

function addProjects(project) {
  return db('projects')
    .insert(project)
    .then((ids) => {
      const [id] = ids;
      return findProjectsById(id);
    });
}

function deleteProjects(id) {
  return db("project").where("id", id).del();
}