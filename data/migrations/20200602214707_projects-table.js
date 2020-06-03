exports.up = function (knex) {
    //the change we want to make to our schema
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
    })
};

exports.down = function (knex) {
    // Undoing change
    return knex.schema.dropTableExists('projects')
};