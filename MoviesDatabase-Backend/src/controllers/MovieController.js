const { v4: uuidv4 } = require('uuid');
const MovieModel = require('../models/MovieModel');

module.exports = {
    async create(request, response) {
        try {
            const newMovie = request.body;
            newMovie.movie_id = uuidv4();
            const { movie_user_id } = request.params;
            newMovie.movie_user_id = movie_user_id;
            const result = await MovieModel.create(newMovie);
            return response.status(200).json({ notification: "Movie was created successfully" })
        } catch (error) {
            console.error(error);

            return response.status(500).json({
                notification: 'Error while trying to create a new movie',
            })
        }
    },

    async getAll(request, response) {
        try {
            const { movie_user_id } = request.params;
            const result = await MovieModel.getAll(
                movie_user_id,
                request.params.times,
                request.params.field,
                request.params.filter,
            );
            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                notification: "Error while trying to get all the movies"
            })
        }
    },

    async getById(request, response) {
        try {
            const { movie_user_id, movie_id } = request.params;
            const result = await MovieModel.getById(movie_user_id, movie_id);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500)
                .json({ notification: "Error while tying to get some movie by your id" })
        }
    },

    async update(request, response) {
        try {
            const { movie_user_id, movie_id } = request.params;
            const UpdatedMovie = request.body;

            const result = await MovieModel.updateById(movie_user_id, movie_id, UpdatedMovie);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                notification: "Error while trying to updated movie"
            })
        }
    },

    async delete(request, response) {
        try {
            const { movie_user_id, movie_id } = request.params;
            const result = await MovieModel.deleteById(movie_user_id, movie_id);

            return response.status(200).json(result);
        } catch (error) {
            console.error(error);

            return response.status(500).json({
                notification: "Error while trying to delete movie"
            })
        }
    }
}