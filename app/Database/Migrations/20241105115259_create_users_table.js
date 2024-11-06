/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.string('id', 50).notNullable().primary();
        table.string('username', 100).notNullable();
        table.string('email', 100).notNullable();
        table.string('role_id', 100).notNullable();
        table.string('password', 100).notNullable();
        table.timestamp('createdAt').nullable();
        table.timestamp('updatedAt').nullable();
        table.timestamp('deletedAt').nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
