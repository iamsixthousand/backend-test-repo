import PostService from "./PostService.js";

class PostController {
    async create(req, res) { // add post
        try {
            console.log(req.files); // cause of fileUpload added
            const post = await PostService.create(req.body, req.files.picture);
            return res.json(post); 
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        };
    };

    async getAll(req, res) { // get all posts
        try {
            // const posts = await Post.find() // returns all posts if has no input params
            // return res.json(posts);
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async getOne(req, res) { // get one post
        try {
            // const { id } = req.params;
            // if (!id) {
            //     res.status(400).json({message: "error: no id"}); // dont work??????
            // }
            // const post = await Post.findById(id);
            // if (!post) { // dsntneeded???
            //     res.status(500).json({message: "error: no such id"});
            // }
            const {id} = req.params;
            const post = await PostService.getOne(id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async update(req, res) { // update post
        try {
            const post = req.body;
            const updatedPost = await PostService.update(post);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async delete(req, res) { // delete post
        try {
            const {id} = req.params;
            const deletedPost = await PostService.delete(id);
            return res.json(deletedPost);
        } catch (error) {
            res.status(500).json(error);
        }
    };
};

export default new PostController();
