const express = require("express");
let router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "abcdef123";

//Admin Register
router.post("/adminRegister", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			surname: req.body.surname,
			email: req.body.email,
			password: hashedPass,
		});
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});
router.get("/adminRegister", (req, res) => {
	User.find({}, (err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			res.status(500).json({ message: err });
		}
	});
});

//Admin Login
router.post("/adminLogin", async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		return res.json({ error: "User Not Found" });
	}
	if (await bcrypt.compare(password, user.password)) {
		const token = jwt.sign({ email: user.email }, JWT_SECRET);
		if (res.status(200)) {
			return res.json({ status: "ok", data: token });
		} else {
			return res.json({ message: error });
		}
	}
	res.json({ status: "error", error: "Invalid Password" });
});
//admin user
router.post("/adminUser", async (req, res) => {
	const { token } = req.body;
	try {
		const user = jwt.verify(token, JWT_SECRET);
		const useremail = user.email;
		User.findOne({ email: useremail })
			.then((data) => {
				res.send({ status: "ok", data: data });
			})
			.catch((error) => {
				res.send({ status: "error", data: error });
			});
	} catch (error) {
		res.status(500).json(error);
	}
});


module.exports = router;
