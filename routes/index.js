const express = require('express');
const router = express.Router();
const Auth = require('../lib/auth');
const passport = require('passport');
const _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res) {
  if(req.isAuthenticated()) {
    const first_name = _.get(req, 'user.name.first_name');
    const last_name = req.user.name.last_name;
    res.render('home', {
      name: first_name + ' ' + last_name
    });
    return;

    // return res.end('Logged-in');
  }
  res.render('index', {});
});

router.get('/register', function(req, res) {
  res.render('register', {});
});

router.post('/register', function(req, res) {
  const { email, password, firstName, lastName } = req.body;

  bcrypt.hash(password, 8, function(err, hashedPassword) {
    const user = new UserModel({
      email: email,
      password: hashedPassword,
      name: {
        first_name: firstName,
        last_name: lastName
      }
    });
    user.save(function(err) {
      res.redirect('/');
    });
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}));

module.exports = router;
