const express = require("express");
let router = express.Router();
const Comments = require("../models/Comments");

//get all comments
router.get("/", (req, res) => {
	Comments.find({}, (err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			res.status(500).json({ message: err });
		}
	});
});
//add comment
router.post("/", (req, res) => {
	let comment = new Comments({
		commentProfile: req.body.commentProfile,
		commentUser: req.body.commentUser,
		commentDate: req.body.commentDate,
		comment: req.body.comment,
		commentImg: req.body.commentImg,
	});
	comment.save();
	res.send({ message: "success" });
});
//! Get comments by id
router.get("/:id", (req, res) => {
	const { id } = req.params;

	Comments.findById(id, (err, docs) => {
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
//delete
router.delete("/:id", (req, res) => {
	const { id } = req.params;
	Comments.findByIdAndDelete(id, (err, docs) => {
		if (!err) {
			res.send({ message: "deleted" });
		} else {
			res.status(500).json({ message: err });
		}
	});
});
//! Update product by id
router.put("/:id", (req, res) => {
	const { id } = req.params;

	Comments.findByIdAndUpdate(id, req.body, (err, doc) => {
		if (!err) {
			res.status(201);
		} else {
			res.status(500).json(err);
		}
	});
	res.send({ message: "SUCCESSFULLY Updated" });
});
module.exports = router;
