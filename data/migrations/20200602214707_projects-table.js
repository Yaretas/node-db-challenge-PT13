exports.up = function (knex) {
    //the change we want to make to our schema
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.integer('project-id', 128).unique().notNullable();
            tbl.string('Name', 255).unique().notNullable();
            tbl.string('Description', 255);
            tbl.boolean('Completed').defaultTo(false).notNullable();
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.integer('Resource-id', 128).unique().notNullable();
            tbl.string('Name', 255).unique().notNullable();
            tbl.string('Description', 255);
            tbl.integer('project-id').unsigned().notNullable().references('project-id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
        })

        .createTable('task', tbl => {
            tbl.increments();
            tbl.integer('task-id', 128).unique().notNullable();
            tbl.string('Description', 255).unique().notNullable();
            tbl.string('Notes', 255);
            tbl.boolean('Completed').defaultTo(false).notNullable();
            tbl.integer('project-id').unsigned().notNullable().references('project-id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    // Undoing change
    return knex.schema
        .dropTableExists('task')
        .dropTableExists('resources')
        .dropTableExists('projects');
};