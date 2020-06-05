const db = require('../data/dbConfig.js');

module.exports = {
    findTask,
    findTaskById,
    addTask,
    deleteTask
}

function findTask() {
    return db('task');
}

function findTaskById(id) {
    return db('task').where({
        id
    }).first();
}

function addTask(tasks) {
    db('task').insert(tasks)
        .then(id => {
            return findTaskById(id[0]);
        })
}

function deleteTask(id) {
    return db('task').where('id', id).del();
}