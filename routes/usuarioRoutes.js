import express from 'express';
import { formularioLogin, formularioRegistro, formOlvidePassword } from '../controllers/usuarioController.js'

const router = express.Router();

router.get('/login',formularioLogin);
router.get('/register', formularioRegistro)
router.get('/olvide-password',formOlvidePassword)


export default router