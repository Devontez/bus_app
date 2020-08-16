const Driver = require ('../models/Driver')
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken')




module.exports={
  
   
    async getAll ( req, res){
        let driver =await Driver.find()
        res.send(drivers)
        
        },

            async createNew(req, res, ){
                try{

                    const salt =await bcrypt.genSalt(10 )
                    const hashpassword = await bcrypt.hash(req.body.password,salt)

                   const driver = new User({
                   name:req.body.name,
                   email:req.body.email, 
                   password:hashpassword

                   })

                     newdriver =await driver.save()
                   res.send(newdriver);

        
                }catch(e){
                res.status(442).send(e.message);
                }
                   
            
                },

              

                async login(req, res){
                    try{
                 const driver = await Driver.findOne({email:req.body.email})
                 if(!user){
                    return res.status(404).send('invalid email address')}
                 const correctpassword = await bcrypt.compare(req.body.password,user.password)
                 if(!correctpassword ){ 
                    return res.status(404).send('invalid password ')}
     
                  const token= await jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)

                   res.header('login_token', token )
                   res.send(token)


            
                    } catch(e){
                        res.status(404).send(e.message)
                    }  
                 
                    }


                

                




}