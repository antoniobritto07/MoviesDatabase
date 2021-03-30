const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.BODY]: Joi.object().keys({
            movie_type: Joi.string()
                .valid(
                    'série',
                    'filme',
                    'novela',
                    'mini-série'
                )
                .insensitive()
                .required(),
            movie_name: Joi.string().required(),
            movie_platform: Joi.string().required(),
            movie_mark: Joi.string().required().min(0).max(10),
            movie_description: Joi.text().required(),
            movie_genre: Joi.string()
                .valid(
                    'ação',
                    'aventura',
                    'comédia',
                    'terror',
                    'documentário',
                    'ficção',
                    'romance',
                    'suspense',
                    'thriller',
                    'drama'
                )
                .insensitive()
                .required(),
        }),
    }),

    getById: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            movie_id: Joi.string()
                .guid({
                    version: ['uuidv4'],
                })
                .required(),
        }),
    }),

    update: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.BODY]: Joi.object().keys({
            movie_type: Joi.string()
                .valid(
                    'série',
                    'filme',
                    'novela',
                    'mini-série'
                )
                .insensitive()
                .required(),
            movie_name: Joi.string().required(),
            movie_platform: Joi.string().required(),
            movie_mark: Joi.string().required().min(0).max(10),
            movie_description: Joi.text().required(),
            movie_genre: Joi.string()
                .valid(
                    'ação',
                    'aventura',
                    'comédia',
                    'terror',
                    'documentário',
                    'ficção',
                    'romance',
                    'suspense',
                    'thriller',
                    'drama'
                )
                .insensitive()
                .required(),
        }),
    }),

    delete: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            movie_id: Joi.string()
                .guid({
                    version: ['uuidv4'],
                })
                .required(),
        }),
    }),
}
