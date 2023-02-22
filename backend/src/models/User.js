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
        },
        password:{
            type:String,
            required:true,
        },
        Confirmpassword:{
            type:String,
            required:true,
        },
        profilePic:{
            type:String,
        }
    }
)
const Users = mongoose.model('user', UserSchema);
module.exports = Users;
