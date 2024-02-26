import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';

// crear la app
const app = express();

//Conexion a la base de datos

try{
    await db.authenticate();
    console.log('Conexion exitosa a la base de datos')
} catch(error){
    console.log(error);
}


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
