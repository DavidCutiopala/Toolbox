const file = require('../controllers/file');
const express = require("express");
const router = express.Router();


router.get("/secret-files", file.getSecretFilesFromApi);

router.get("/secret-files/:name", file.getFilesCsvByName);

module.exports = router;
