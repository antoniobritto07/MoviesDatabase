const connection = require("../database/connection");

module.exports = {
    async create(user) {
        const result = await connection("user").insert(user);
        return result;
    },

    async getAll() {
        const result = await connection('user')
            .select('*');
        return result;
    },

    async getById(user_id) {
        const result = await connection('user')
            .where({ user_id })
            .select('*')
            .first();
        return result;
    },

    async updateById(user_id, user) {
        const result = await connection('user')
            .where({ user_id })
            .update(user);
        return result;
    },

    deleteById(user_id) {
        const result = await connection('user')
            .where({ user_id })
            .first()
            .delete();

        return result;
    },

    async getByFields(fields) {
        const result = await connection('user')
            .where(fields)
            .select('*')
            .first();
        return result;
    }
}