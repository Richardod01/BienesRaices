const formularioLogin = (req, res) =>{
    res.render('auth/login', {
        pagina: 'Iniciar sesion'
    })
}

const formularioRegistro = (req, res) =>{
    res.render('auth/register', {
        pagina: 'Crear cuenta'
    })
}

const formOlvidePassword = (req,res) =>{
    res.render('auth/olvide-password', {
        pagina: 'Recuperar el password'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formOlvidePassword
}