const { Post } = require("../../models");
const router = require('express').Router();

//VIEW ALL POSTS 
router.get("/posts", (req,res) =>{
    const postData = Post.findAll({}); 
    //render your neww handlebar with data fro mthe database 
    res.render("/dashboard", {posts: postData})
}); 
//VIEW POST BY ID 
router.get("/posts/:id", (req,res) =>{
    const postData = Post.findAll({}); 
    //render your neww handlebar with data fro mthe database 
    res.render("/dashboard", {posts: postData})
}); 
router.post("/", (req,res) =>{
    console.log("Creating a new post", req.body);
    const postData = Post.create(req.body); 
    // res.status(200).json(postData);
    //render your neww handlebar with data fro mthe database 
    res.render("/dashboard", {posts: postData})
});
//UPDATE POST BY ID 

//DELETE POST BY ID 

module.exports  = router; 