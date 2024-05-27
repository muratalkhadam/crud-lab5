import { useState, useEffect } from 'react';
import '../App.css';

const PostForm = ({ post, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    text: ''
  });

  useEffect(() => {
    if (post) {
      setFormData(post);
    } else {
      setFormData({ title: '', author: '', text: '' });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Text"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
