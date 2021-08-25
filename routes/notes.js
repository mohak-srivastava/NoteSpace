const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Note = require('../models/Note')


// @desc    Show add page
// @route   GET /notes/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('notes/add')
})
 
    module.exports = router