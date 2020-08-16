module.exports={
  
   
    async index ( req, res){
        res.render('driver/register');
    },
    async store ( req, res){
        // write code to save to database
        // write code to send the reponse to the user
       // res.('driver/register');
    },
    


    async login(req, res) {

        const { email, password } = req.body;
        console.log(email)

        res.send('ok').status(200);

    }
}