class AuthController {

    index(req, res) {
        res.render('profile', {
            title: 'Perfil'
        });
    }

}

export default new AuthController;