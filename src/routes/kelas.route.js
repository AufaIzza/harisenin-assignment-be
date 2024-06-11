const express = require("express")

const router = express.Router()

const {index} = require("../controllers/kelas.controller")

router.get("/kelas", index)

module.exports = router