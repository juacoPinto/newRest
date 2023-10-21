const { response } = require('express');

const usuariosGet = ( req, res = response) => { 

    const params = req.query; // Se puede desestructurar const { q, apikey } = req.query;

    res.json({
        msg:'GET - Controller',
        params
    });
};

const usuariosPost = ( req, res = response) => {

    const { nombre, empleo } = req.body;

    res.json({
        msg:'POST - Controller',
        nombre,
        empleo
    });
};

const usuariosPut = ( req, res = response) => {

    const id  = req.params.id;

    res.json({
        msg:'PUT - Controller',
        id
    });
};

const usuariosDelete = ( req, res = response) => {
    res.json({
        msg:'DELETE - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}

