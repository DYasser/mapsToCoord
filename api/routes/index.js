const express = require("express"),
    coords = require("../controllers/coords.controller"),
    router = express.Router()
//Cheking if api is working route
router.get("/", (req, res) => {
    res.json(require('../../version.json') );

})

router.get("/test", coords.urlToCoord);

module.exports = router;