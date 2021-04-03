const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            adm_email: Joi.string().email().required(),
            adm_name: Joi.string().required(),
            adm_password: Joi.string().required().min(8).max(24),
        }),
    }),

    getById: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            adm_id: Joi.string()
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
            adm_id: Joi.string()
                .guid({
                    version: ['uuidv4'],
                })
                .required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            adm_name: Joi.string().required(),
            adm_email: Joi.string().email().required(),
            adm_password: Joi.string().required().min(8).max(24),
        }),
    }),

    delete: celebrate({
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            adm_id: Joi.string()
                .guid({
                    version: ['uuidv4'],
                })
                .required(),
        }),
    }),
}
