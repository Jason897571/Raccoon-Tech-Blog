const router = require('express').Router();
const { User } = require('../models');


// main page router
router.get('/', async (req, res) => {
  try {
    //TODO get post data here and render
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async(req, res) => {
  res.render('login');
})

router.get('/signup', async(req, res) => {
  res.render('signup');
})

module.exports = router;