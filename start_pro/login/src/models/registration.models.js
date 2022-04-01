
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestamps : true,
    versionKey : false,
})


const Registration = mongoose.model("registration", registrationSchema)

module.exports = Registration;
