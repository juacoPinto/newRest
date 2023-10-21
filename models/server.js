const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        //Rutas
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas de mi APP
        this.routes();
    };

    middlewares(){
        //CORS
        this.app.use( cors() );
        //Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio Publico
        this.app.use(express.static('public'));
    };

    routes(){
        this.app.use( this.usuariosPath , require('../routes/usuarios.routes'));
    };

    listen(){
        this.app.listen( this.port , ()=>{
            console.log('Servidor Corriendo en el puerto', this.port);
        });
    };

};

module.exports = Server;
