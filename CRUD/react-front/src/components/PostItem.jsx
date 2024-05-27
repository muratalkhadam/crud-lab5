import '../App.css';

const PostItem = ({ post, onDelete, onEdit }) => {
  return (
    <li className="post-item">
      <h3>{post.title}</h3>
      <p><strong>Author:</strong> {post.author}</p>
      <p>{post.text}</p>
      <button onClick={() => onEdit(post)} className="edit-button">Edit</button>
      <button onClick={() => onDelete(post._id)} className="delete-button">Delete</button>
    </li>
  );
};

export default PostItem;
