const express = require('express');
const router = express.Router();

// @route      Get api/auth
// @desc      Get logged in user
// @access    Privet
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route      POST api/auth
// @desc      auth user and get token
// @access    Public
router.post('/', (req, res) => {
  res.send('Login user');
});
module.exports = router;
