const express = require("express");
let router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "abcdef12";

//Register
router.post("/register", async (req, res) => {
	try {
		const oldUser = User.findOne({ email });
		if (oldUser) {
			return res.send({ error: "User exists" });
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		const hashPass = await bcrypt.hash(req.body.Confirmpassword, salt);
		const newUser = new User({
			username: req.body.username,
			surname: req.body.surname,
			email: req.body.email,
			password: hashedPass,
			Confirmpassword: hashPass,
		});
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});
router.get("/register", (req, res) => {
	User.find({}, (err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			res.status(500).json({ message: err });
		}
	});
});
router.delete("/register/:id", (req, res) => {
	const { id } = req.params;
	User.findByIdAndDelete(id, (err, docs) => {
		if (!err) {
			res.send({ message: "deleted" });
		} else {
			res.status(500).json({ message: err });
		}
	});
});
//! Update user by id
router.put("/:id", (req, res) => {
	const { id } = req.params;

	User.findByIdAndUpdate(id, req.body, (err, doc) => {
		if (!err) {
			res.status(201);
		} else {
			res.status(500).json(err);
		}
	});
	res.send({ message: "SUCCESSFULLY Updated" });
});
//Login
router.post("/login", async (req, res) => {
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
			// return res.json({error:"error"});
			return res.json({ message: error });
		}
	}
	res.json({ status: "error", error: "Invalid Password" });
});
//user
router.post("/userData", async (req, res) => {
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
router.get("/register", (req, res) => {
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
