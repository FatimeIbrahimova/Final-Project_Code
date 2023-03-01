const express = require("express");
let router = express.Router();
const Products = require("../models/AllProduct");

//get all products
router.get("/", (req, res) => {
	Products.find({}, (err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			res.status(500).json({ message: err });
		}
	});
});
//add product
router.post("/", (req, res) => {
	let product = new Products({
		url: req.body.url,
		title: req.body.title,
		desc: req.body.desc,
		name: req.body.name,
		date: req.body.date,
		allDesc: req.body.allDesc,
	});
	product.save();
	res.send({ message: "success" });
});
//! Get product by id
router.get("/:id", (req, res) => {
	const { id } = req.params;

	Products.findById(id, (err, docs) => {
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
	Products.findByIdAndDelete(id, (err, docs) => {
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

	Products.findByIdAndUpdate(id, req.body, (err, doc) => {
		if (!err) {
			res.status(201);
		} else {
			res.status(500).json(err);
		}
	});
	res.send({ message: "SUCCESSFULLY Updated" });
});
module.exports = router;
