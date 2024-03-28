const routes = require('express').Router()

// const { userLogin, userRegister,createText,getText } = require('../controller/user.controller')
const { userLogin, userRegister, createText, getText } = require('../controller/userController')
const auth = require('../middleware/auth.middleware')

routes.get('/hello', (req, res) => {
    return res.send('<h1> helloooooooooo world! </h1>')
})

routes.get('/test', (req, res) => {
    return res.send('<h1> this is the test api for CI/CD pipeline </h1>')
})
routes.post('/login', userLogin)
routes.post('/register', userRegister)
routes.post('/create_text', auth, createText)
routes.get('/get_text',auth, getText)

module.exports = routes;