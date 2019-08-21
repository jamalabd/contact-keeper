const express = require('express');
const router = express.Router();

// @route      GET api/contacts
// @desc      GET all users contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route      POST api/contacts
// @desc      ADD new contacts
// @access    Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route     PUT api/contacts/:id
// @desc      Update contacts
// @access    Privete
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route     DELET api/contacts/:id
// @desc      Delete contacts
// @access    POST Public
router.delete('/:id', (req, res) => {
  res.send('Deletcontact');
});

module.exports = router;
