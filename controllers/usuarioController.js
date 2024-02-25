const formularioLogin = (req, res) =>{
    res.render('auth/login', {

    })
}

const formularioRegistro = (req, res) =>{
    res.render('auth/register', {
        pagina: 'Crear cuenta'
    })
}

export {
    formularioLogin,
    formularioRegistro
}