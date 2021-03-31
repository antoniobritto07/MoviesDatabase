const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/UserModel');
const firebase = require('../utils/firebase');

module.exports = {
    async create(request, response) {
        try {
            const newUser = request.body;
            newUser.user_id = uuidv4();
            newUser.user_firebase = await firebase.createNewUser(
                newUser.user_email, newUser.user_password
            )
            //LEMBRAR DE ATIVAR PARA AS SENHAS NAO IREM PARA O BANCO DE DADOS
            const result = await UserModel.create(newUser);
            delete newUser.user_password
            return response.status(200).json({ notification: "User was created successfully" })
        } catch (error) {
            console.error(error);

            return response.status(500).json({
                notification: 'Error while trying to create a new user',
            })
        }
    },

    async getAll(request, response) {
        try {
            const result = await UserModel.getAll();

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                notification: "Error while trying to get all the users"
            })
        }
    },

    async getById(request, response) {
        try {
            const { user_id } = request.params;
            const result = await UserModel.getById(user_id);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500)
                .json({ notification: "Error while tying to get some user by your id" })
        }
    },

    async update(request, response) {
        try {
            const { user_id } = request.params;
            const UpdatedUser = request.body;

            const result = await UserModel.updateById(user_id, UpdatedUser);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                notification: "Error while trying to updated user"
            })
        }
    },

    async delete(request, response) {
        try {
            const { user_id } = request.params;
            const result = await UserModel.deleteById(user_id);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);

            return response.status(500).json({
                notification: "Error while trying to delete user"
            })
        }
    }
}