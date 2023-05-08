const UsuarioController = require ('../controllers/user.controller');

module.exports = function (app){
    app.post('/api/usuario',UsuarioController.createUser);
    app.get('/api/usuario/:id', UsuarioController.getUsuario)
}