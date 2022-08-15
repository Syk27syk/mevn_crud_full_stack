const { post } = require("../routes/routes");

module.exports = class API {
    // define all the methods
    // fetch all posts
    static async fetchAllPost(req, res) {
        // res.send("Hello From API");
        try {
            const posts = await post.find();
            res.status(200,json(posts));
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
    // fetch post by ID
    static async fetchPostByID(req, res) {
        res.send("Fetch Post By ID");
    }
    // create a post
    static async createPost(req, res) {
        // res.send("create Post");
        const post = req.body;
        const imagename = req.file.filename;
        postimage = imagename;
        try {
            await Post.create(post);
            res.status(201).json({message: 'Post created successfully!'})
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
    // update a post
    static async updatePost(req, res) {
        res.send("update post");
    }
    // delete a post
    static async deletePost(req, res) {
        res.send("delete post");
    }
};
