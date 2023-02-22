const express = require("express");
let router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/", async (req, res) => {
	try{
	    const salt=await bcrypt.genSalt(10);
	    const hashedPass=await bcrypt.hash(req.body.password,salt);
	    const hashPass=await bcrypt.hash(req.body.Confirmpassword,salt);
	    const newUser=new User({
	        username:req.body.username,
	        surname:req.body.surname,
	        email:req.body.email,
	        password:hashedPass,
	        Confirmpassword:hashPass,
	    })
	    const user=await newUser.save();
	    res.status(200).json(user)
	}catch(err){
	    res.status(500).json(err)
	}
	// let user = new User({
	// 	username: req.body.username,
	// 	surname: req.body.surname,
	// 	email: req.body.email,
	// 	password: req.body.password,
	// 	Confirmpassword:req.body.Confirmpassword,
	// });
	// user.save();
	// res.send({ message: "success" });
});
router.get("/",(req,res)=>{
    User.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
})
//Login
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		!user && res.status(400).json("Wrong credentials!");

		const validated = await bcrypt.compare(req.body.password, user.password);
		!validated && res.status(400).json("Wrong credentials!");

		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
