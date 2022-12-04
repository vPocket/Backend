const express = require('express');

const {} = require('../controllers/user');

const router = express.Router();

router.post("/signup",userSignup);
router.post("/signin",userSignin);