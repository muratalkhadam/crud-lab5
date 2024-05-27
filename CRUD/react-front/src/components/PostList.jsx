import PostItem from './PostItem';
import '../App.css';

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <PostItem
            key={post._id}
            post={post}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
