const express = require('express');
const { createDeveloper, getDevelopers } = require('../controllers/developer');
const router = express.Router();

router.get("/", getDevelopers);

router.post("/", createDeveloper);

module.exports = router;