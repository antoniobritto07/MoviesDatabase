const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.BODY]: Joi.object().keys({
            movie_type: Joi.string().required(),
            // movie_genre: Joi.string().required(),
            movie_name: Joi.string().required(),
            movie_platform: Joi.string().required(),
            movie_mark: Joi.number().required().min(0).max(10),
            movie_description: Joi.string().required(),
        }),
    }),

    update: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.BODY]: Joi.object().keys({
            movie_type: Joi.string().required(),
            movie_name: Joi.string().required(),
            movie_platform: Joi.string().required(),
            movie_mark: Joi.number().required().min(0).max(10),
            movie_description: Joi.string().required(),
            movie_genre: Joi.string().required(),
        }),
    })
}

