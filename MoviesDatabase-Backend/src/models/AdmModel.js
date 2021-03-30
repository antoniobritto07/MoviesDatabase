const connection = require("../database/connection");

module.exports = {
    async create(administrador) {
        const result = await connection("administrador").insert(administrador);
        return result;
    },

    async getAll() {
        const result = await connection('administrador').select('*');
        return result;
    },

    async getById(administrador_id) {
        const result = await connection('administrador')
            .where({ adm_id: administrador_id })
            .select('*')
            .first();
        return result;
    },

    async updateById(administrador_id, administrador) {
        const result = await connection('administrador')
            .where({ adm_id: administrador_id })
            .update(administrador);
        return result;
    },

    deleteById(administrador_id) {
        const result = await connection('administrador')
            .where({ adm_id: administrador_id })
            .first()
            .delete();

        return result;
    },

    async getByFields(fields) {
        const result = await connection('administrator')
            .where(fields)
            .select('*')
            .first();
        return result;
    }
}