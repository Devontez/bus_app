const mongoose = require ('mongoose', { useUnifiedTopology: true });
const Schema = mongoose.Schema

const PassengerSchema = new Schema({
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

Passenger = mongoose.model('passenger',  PassengerSchema) 

module.exports = Passenger;