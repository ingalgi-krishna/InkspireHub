import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/blogform.css'


const BlogForm = ({ fetchBlogs, editBlog, setEditBlog }) => {
  const { user } = useAuth0();
  const [author, setAuthor] = useState(editBlog ? editBlog.author : user.name);
  const [title, setTitle] = useState(editBlog ? editBlog.title : '');
  const [description, setDescription] = useState(editBlog ? editBlog.description : '');
  const [showAlert, setShowAlert] = useState(false); // State for showing alert
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      author,
      title,
      description
    };
    if (editBlog) {
      await axios.put(`http://localhost:5000/blogs/${editBlog._id}`, blogData);
      setEditBlog(null);
    } else {
      await axios.post('http://localhost:5000/blogs', blogData);
    }
    setAuthor('');
    setTitle('');
    setDescription('');
    fetchBlogs();
    navigate('/');
    setShowAlert(true); // Show alert after submitting
    setTimeout(() => {
      setShowAlert(false); // Hide alert after 3 seconds
    }, 3000);
  };

  return (
    <div className="form-container">
      <h1>Post Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">{editBlog ? 'Update' : 'Submit'}</button>
      </form>
      {showAlert && <div className="alert">Form submitted successfully!</div>}
    </div>
  );
};

export default BlogForm;
