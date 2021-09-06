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

router.get('/dashboard/new', (req,res)=>{
  res.render('newpost');
}); 

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log("View all posts", posts);
    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router; 