const express = require('express');

const router = express.Router();
const jamp3 = require("../controller/jamp3");

router.get('/', jamp3.index);
router.get('/pizza/menu', jamp3.menu);
router.get('/pizza/services', jamp3.services);
router.get('/pizza/blog', jamp3.blog);
router.get('/pizza/about', jamp3.about);
router.get('/pizza/contact', jamp3.contact);

module.exports = router;