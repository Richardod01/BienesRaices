import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

// crear la app
const app = express();


//Habilitando PUG
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta publica

app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)

//Definir un puerto y arrancar el proyecto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
