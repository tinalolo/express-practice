import { celebrate, Joi, Segments } from 'celebrate';

const userValidation = {
    getAllUsers: celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
    }),

    getUserById: celebrate({
        [Segments.PARAMS]: {
            userId: Joi.number().integer().required(),
        },
    }),

    searchUsers: celebrate({
        [Segments.BODY]: {
            sort: Joi.string().valid('asc', 'desc'),
            name: Joi.string().required(),
        },
    }),
};

export default userValidation;
