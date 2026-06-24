const express = require('express');

const app = express();

app.get('/api/v1/saludo', (req,res)=>{

    console.log(
        `Petición atendida por ${process.env.INSTANCIA}`
    );

    res.json({
        mensaje: 'Hola desde la API',
        instancia: process.env.INSTANCIA,
        contenedor: process.env.HOSTNAME
    });

});

app.listen(3000, ()=>{
    console.log('API iniciada');
});
