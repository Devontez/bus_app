const { login } = require("../Passenger");


module.exports={
  
   
    async index ( req, res){
        res.render('auth/login');
    },

    async login(req, res) {

        const { email, password } = req.body;
        console.log(email)

        res.send('ok').status(200);

    }
}