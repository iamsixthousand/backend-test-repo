import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, picture) { // add post
        const fileName = FileService.getFileName(picture);
        const createdPost = await Post.create({...post, picture: fileName});
           return createdPost;
    };

    async getAll() { // get all posts
        const posts = await Post.find() // returns all posts if has no input params
        return posts;
    };

    async getOne(id) { // get one post
        if (!id) {
            throw new Error('no id provided')
        }
        const post = await Post.findById(id);
        return post;
    };

    async update(post) { // update post
        if (!post._id) {
            throw new Error('no id provided');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    };

    async delete(id) { // delete post
        if (!id) {
            throw new Error('no id provided');
        }
        const deletedPost = await Post.findByIdAndDelete(id);
        return {deleted: deletedPost};
    };
}

export default new PostService();
