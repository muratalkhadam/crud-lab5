import { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import api from './api';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    const response = await api.get('/posts');
    setPosts(response.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    setSelectedPost(post);
  };

  const handleSave = async (post) => {
    if (selectedPost) {
      // оновлюємо пост
      const response = await api.put(`/posts/${post._id}`, post);
      setPosts(posts.map((p) => (p._id === post._id ? response.data.data : p)));
    } else {
      // додаємо новий пост
      const response = await api.post('/posts', post);
      setPosts([...posts, response.data.data]);
    }
    setSelectedPost(null);
  };

  const handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD Posts</h1>
      <PostForm post={selectedPost} onSave={handleSave} />
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;