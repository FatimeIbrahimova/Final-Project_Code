const mongoose=require("mongoose");
const {Schema} = mongoose;
const UserSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
        },
        surname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
)
const Users = mongoose.model('userAdmin', UserSchema);
module.exports = Users;