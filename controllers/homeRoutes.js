const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// main page router
router.get('/', async (req, res) => {
  try {
    //TODO get post data here and render
/*     const post_info = await Post.findAll({
      attributes:{include:[User]}
    })

    console.log(post_info) */

    res.render('homepage',{
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async(req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
})

router.get('/signup', async(req, res) => {
  res.render('signup');
})

router.get('/dashboard', async(req, res) => {
  res.render('dashboard');
})

module.exports = router;