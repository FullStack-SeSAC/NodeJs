const express = require('express');
const controller = require('../controller/CUser');
const router = express.Router();


router.get('/', controller.main);