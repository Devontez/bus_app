const mongoose = require ('mongoose', { useUnifiedTopology: true });
const Schema = mongoose.Schema

const DriverSchema = new Schema({
      name: {
            type: String,
            required:[true, "please add a name"],
            

      },
      email: {
        type: String,
        required:[true, "please add a email"],
        unique:true

  },
  password: {
    type: String,
    required:[true, "please add a password"],
    max:1024,
    min:20

},


       

}),

Driver = mongoose.model('driver',  DriverSchema) 

module.exports = Driver;