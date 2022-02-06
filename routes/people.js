const express = require("express");
const router = express.Router();

const { getData } = require("../controllers/people");

router.route("/").get(getData);

module.exports = router;
