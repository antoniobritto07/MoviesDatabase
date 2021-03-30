const connection = require("../database/connection");

module.exports = {
    async create(movie) {
        const result = await connection("movie").insert(movie);
        return result;
    },

    async getAll() {
        const result = await connection('movie')
            .select('*');
        return result;
    },

    async getById(movie_id) {
        const result = await connection('movie')
            .where({ movie_id })
            .select('*')
            .first();
        return result;
    },

    async updateById(movie_id, movie) {
        const result = await connection('movie')
            .where({ movie_id })
            .update(movie);
        return result;
    },

    deleteById(movie_id) {
        const result = await connection('movie')
            .where({ movie_id })
            .first()
            .delete();

        return result;
    }
}