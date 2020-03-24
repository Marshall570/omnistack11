const express = require('express')
const routes = express.Router()

const ong_controller = require('./controller/OngController')
const incidents_controller = require('./controller/IncidentController')
const profile_controller = require('./controller/ProfileController')
const session_controller = require('./controller/SessionController')



routes.post('/ongs', ong_controller.create)
routes.get('/ongs', ong_controller.select)

routes.post('/incidents', incidents_controller.create)
routes.get('/incidents', incidents_controller.select)
routes.delete('/incidents/:id', incidents_controller.delete)

routes.get('/profile', profile_controller.select)

routes.post('/session', session_controller.create)

module.exports = routes
