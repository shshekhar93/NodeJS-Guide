const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.isLoggedIn) {
    const {first_name, last_name} = req.session.user.name;
    res.render('home', {
      name: first_name + ' ' + last_name
    });
    return;
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

router.post('/login', function(req, res) {
  const { username, password } = req.body;

  UserModel.findOne({email: username})
  .then(function(user) {
    // Sucess
    bcrypt.compare(password, user.password, function(err, isEqual) {
      if(err) {
        console.log(err);
        throw err;
      }

      req.session.isLoggedIn = isEqual;

      if(isEqual) {
        req.session.user = user.toJSON();
      }
      res.redirect('/');
    });
    // return 'HELLO';
    return UserModel.findOne({username: username});
  })
  .then(function(foo) {
    return 'World';
  })
  .then(function(otherVar) {

  })
  .catch(function(err) {
    console.log(err);
    throw err;
  })

  UserModel.findOne({email: username}, function(err, user) {
    if(err) {
      console.log(err);
      throw err;
    }

    bcrypt.compare(password, user.password, function(err, isEqual) {
      if(err) {
        console.log(err);
        throw err;
      }

      req.session.isLoggedIn = isEqual;

      if(isEqual) {
        req.session.user = user.toJSON();
      }
      res.redirect('/');
    })
  });
});

module.exports = router;
