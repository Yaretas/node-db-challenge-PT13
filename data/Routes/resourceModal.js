const db = require('../data/dbConfig.js');

module.exports = {
    findResource,
    findResourceById,
    addResource,
    deleteResource
}

function findResource() {
    return db('resource');
}

function findResourceById(id) {
    return db('resource').where({
        id
    }).first();
}

function addResource(resources) {
    db('resource').insert(resources)
        .then(id => {
            return findResourceById(id[0]);
        })
}

function deleteResource(id) {
    return db('resource').where('id', id).del();
}