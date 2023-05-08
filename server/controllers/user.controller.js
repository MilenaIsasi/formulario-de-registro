const { request , response} = require("express");
const {Usuario } = require ("../models/user.model")


module.exports.createUser = async (request, response) => {
    try{
        const usuario = new Usuario(request.body);
        await usuario.save();
        response.json ({msg : "Usuario Registrado", usuario});

    } catch (error){
        response.status(400);
        response.json(error);
    }
}

module.exports.getUsuario = async (request, response)=>{
    try{
        const usuario = await Usuario.findOne({_id:request.params.id})
        response.cookie("mipropiocookie", "valor de la cookie", { httpOnly: true })
        response.json(usuario);
    } catch (error){
        response.status(400);
        response.json(error);
    }
}