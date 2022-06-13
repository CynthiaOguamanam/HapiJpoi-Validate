const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
         type: String,
    },
    middleName:{
        type: String,
   },
   lastName:{
    type: String,
   },
   course:{
       type: String
   },
   institution:{
    type: String,
   },
   married:{
    type: Boolean
   },
   phoneNo:{
    type: Number,
   }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)
