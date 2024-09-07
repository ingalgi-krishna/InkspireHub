import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import CommentForm from './CommentForm';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);
    setBlog(response.data);
  };

  const handleLike = async () => {
    await axios.post(`http://localhost:5000/blogs/${id}/like`);
    fetchBlog();
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>by {blog.author}</h2>
      <p>{blog.description}</p>
      <button onClick={handleLike}>Like ({blog.likes})</button>
      <h3>Comments</h3>
      {blog.comments.map((comment, index) => (
        <div key={index}>
          <h4>{comment.author}</h4>
          <p>{comment.content}</p>
        </div>
      ))}
      {isAuthenticated && <CommentForm blogId={id} fetchBlog={fetchBlog} />}
    </div>
  );
};

export default BlogDetail;
