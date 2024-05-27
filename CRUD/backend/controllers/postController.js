const Post = require('../models/postModel');

// Контролер для створення посту
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для отримання всіх постів
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для оновлення маршруту за ідентифікатором
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для видалення маршруту за ідентифікатором
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).json({ success: true, data: null });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Контролер для отримання маршрутів у форматі JSON
exports.getPostsJSON = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
