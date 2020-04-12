const express = require('express')
const {
    celebrate,
    Joi,
    Segments
} = require('celebrate')
const routes = express.Router()



const ong_controller = require('./controller/OngController')
const incidents_controller = require('./controller/IncidentController')
const profile_controller = require('./controller/ProfileController')
const session_controller = require('./controller/SessionController')


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().length(2)
    })
}), ong_controller.create)
routes.get('/ongs', ong_controller.select)

routes.post('/incidents', incidents_controller.create)
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidents_controller.select)
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidents_controller.delete)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profile_controller.select)

routes.post('/sessions', session_controller.create)

module.exports = routes