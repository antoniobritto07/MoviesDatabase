const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.BODY]: Joi.object().keys({
            user_email: Joi.string().email().required(),
            user_name: Joi.string().required(),
            user_birthday: Joi.date().required(),
            user_gender: Joi.string().required(),
            user_password: Joi.string().required().min(8).max(24),
        }),
    }),

    getById: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string()
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
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string()
                .guid({
                    version: ['uuidv4'],
                })
                .required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            user_email: Joi.string().email().required(),
            user_name: Joi.string().required(),
            user_birthday: Joi.date().required(),
            user_gender: Joi.string()
                .valid(
                    'masculino',
                    'feminino'
                )
                .insensitive()
                .required(),
            user_password: Joi.string().required().min(8).max(24),
        }),
    }),

    delete: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string()
                .guid({
                    version: ['uuidv4'],
                })
                .required(),
        }),
    }),
}
