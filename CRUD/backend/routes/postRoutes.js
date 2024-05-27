const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Маршрути для CRUD операцій над маршрутами
// Створення маршруту
router.post('/posts', postController.createPost);

// Отримання всіх маршрутів
router.get('/posts', postController.getPosts);

// Оновлення маршруту
router.put('/posts/:id', postController.updatePost);

// Видалення маршруту
router.delete('/posts/:id', postController.deletePost);

// Отримання всіх маршрутів у форматі JSON
router.get('/posts-json', postController.getPostsJSON);

module.exports = router;
