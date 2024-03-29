const express = require("express");
let router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("You can update only your account");
	}
});
//Delete
router.delete("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			try {
				await Post.deleteMany({ username: user.username });
				await User.findByIdAndDelete(req.params.id);
				res.status(200).json("User has been deleted");
			} catch (err) {
				res.status(500).json(err);
			}
		} catch (err) {
			res.status(404).json("User not found");
		}
	} else {
		res.status(401).json("You can delete only your account");
	}
});
//get user
router.get("/:id", (req, res) => {
	const { id } = req.params;

	User.findById(id, (err, docs) => {
		if (!err) {
			if (docs) {
				res.send(docs);
				res.status(200);
			} else {
				res.status(404).json({ message: "NOT FOUND" });
			}
		} else {
			res.status(500).json({ message: err });
		}
	});
});

module.exports = router;
