
exports.up = function (knex) {
    return knex.schema.createTable("movie", (table) => {
        table.uuid('movie_id').primary().notNullable();
        table.string('movie_name').notNullable();
        table.enum('movie_type', [
            'SÉRIE',
            'FILME',
            'NOVELA',
            'MINI-SÉRIE'
        ]);
        table.enum('movie_genre', [
            'AÇÃO',
            'AVENTURA',
            'COMÉDIA',
            'TERROR',
            'DOCUMENTÁRIO',
            'FICÇÃO',
            'ROMANCE',
            'SUSPENSE',
            'THRILLER',
            'DRAMA'
        ]);
        table.decimal('movie_mark', 4, 1).notNullable();
        table.string('movie_platform').notNullable();
        table.text('movie_description', 'longtext').notNullable();
        table.uuid('movie_user_id').notNullable();

        table
            .foreign('movie_user_id')
            .references('user_id')
            .inTable('user')
            .onDelete('cascade');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("movie");
};
