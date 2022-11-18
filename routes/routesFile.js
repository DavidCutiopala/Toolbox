const file = require('../controllers/file');
const express = require("express");
const router = express.Router();


router.get("/files", file.getSecretFilesFromApi);

router.get("/file/:name", file.getFilesCsvByName);

module.exports = router;
