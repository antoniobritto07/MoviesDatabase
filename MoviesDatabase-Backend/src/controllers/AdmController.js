const { v4: uuidv4 } = require('uuid');
const AdmModel = require('../models/AdmModel');
const firebase = require('../utils/firebase');

module.exports = {
    async create(request, response) {
        try {
            const newAdm = request.body;
            newAdm.adm_id = uuidv4();
            newAdm.adm_firebase = await firebase.createNewUser(
                newAdm.adm_email, newAdm.adm_password
            )
            const result = await AdmModel.create(newAdm);
            //LEMBRAR DE ATIVAR PARA AS SENHAS NAO IREM PARA O BANCO DE DADOS
            delete newAdm.adm_password
            return response.status(200).json({ notification: "Adm was created successfully" })
        } catch (error) {
            console.error(error);

            return response.status(500).json({
                notification: 'Error while trying to create a new administrador',
            })
        }
    },

    async getAll(request, response) {
        try {
            const result = await AdmModel.getAll();

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                notification: "Error while trying to get all the adms"
            })
        }
    },

    async getById(request, response) {
        try {
            const { adm_id } = request.params;
            const result = await AdmModel.getById(adm_id);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500)
                .json({ notification: "Error while tying to get some adm by your id" })
        }
    },

    async update(request, response) {
        try {
            const { adm_id } = request.params;
            const UpdatedAdm = request.body;

            const result = await AdmModel.updateById(adm_id, UpdatedAdm);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                notification: "Error while trying to updated administrador"
            })
        }
    },

    async delete(request, response) {
        try {
            const { adm_id } = request.params;
            const result = await AdmModel.deleteById(adm_id);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);

            return response.status(500).json({
                notification: "Error while trying to delete administrador"
            })
        }
    }
}