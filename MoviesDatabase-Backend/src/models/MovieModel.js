const connection = require("../database/connection");

module.exports = {
    async create(movie) {
        const result = await connection("movie").insert(movie);
        return result;
    },

    async getAll(movie_user_id) {
        const result = await connection('movie')
            .where({ movie_user_id })
            .select('*');
        return result;
    },

    async getById(movie_user_id, movie_id) {
        const result = await connection('movie')
            .where({ movie_user_id, movie_id })
            .select('*')
            .first();
        return result;
    },

    async updateById(movie_user_id, movie_id, movie) {
        const result = await connection('movie')
            .where({ movie_user_id, movie_id })
            .update(movie);
        return result;
    },

    async deleteById(movie_user_id, movie_id) {
        const result = await connection('movie')
            .where({ movie_user_id, movie_id })
            .first()
            .delete();

        return result;
    }
}