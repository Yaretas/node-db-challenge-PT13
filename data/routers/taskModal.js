const db = require('../dbConfig.js');

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
        .then((ids) => {
            const [id] = ids;
            return findTaskById(ids);
        })
}

function deleteTask(id) {
    return db('task').where('id', id).del();
}