const Post = require('../models/Post');

exports.getAllPosts = async (req,res , next) => {
    try {
        let [postAll , _] =await Post.getAllPost();
        res.status(200).json(postAll)
    } catch (err) {
        console.log("ERROR GET ALL POST" )
        next(err);
    }
}

exports.createNewPost =  async (req,res , next) => {
    const {title , body } = req.body;
    let post = new Post(title,body);
    try {
         await post.save();
        res.status(201).json("POST CREATED");
    }catch(err) {
        console.log("ERROR CREATE NEW POST" )
       next(err);
    }
}

exports.getPostById = async (req,res , next) => {
    try {
        let postId = req.params.id;
        console.log(postId)
        const [onePost , _] = await Post.getPostById(postId);
        res.status(200).json({post :     onePost[0]});
    }catch(err) {
        console.log("ERROR GET POST BY ID" )
        next(err);
    }
}
