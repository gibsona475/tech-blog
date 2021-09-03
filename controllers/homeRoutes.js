const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const withAuth = require('../utils/auth');

//http://localhost:3001/login
router.get("/login", (req,res) =>{
    // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

    //render handlebars 

    res.render('login'); 
}); 

router.get("/signup", (req,res) =>{
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    //render handlebars 
    res.render('signup'); 
}); 

module.exports = router; 