
exports.up = function (knex) {
    return knex.schema.createTable("user", (table) => {
        table.uuid('user_id').primary().notNullable();
        table.string('user_firebase').notNullable();
        table.string('user_name').notNullable();
        table.date('user_birthday').notNullable();
        table.enum('user_gender', ['MASCULINO' ,'FEMININO']);
        table.string('user_email').notNullable();
        table.string('user_password').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("user");
};
