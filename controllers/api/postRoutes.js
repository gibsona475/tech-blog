const { Post } = require("../../models");


//VIEW ALL POSTS 
router.get("/users", (req,res) =>{
    const postData = Post.findAll({}); 
    //render your neww handlebar with data fro mthe database 
    res.render("/dashboard", {posts: postData})
}); 
//VIEW POST BY ID 

//UPDATE POST BY ID 

//DELETE POST BY ID 