import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/bloglist.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:5000/blogs');
    setBlogs(response.data);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h1 className="blog-title">{blog.title}</h1>
            <h6 className="blog-author">- {blog.author}</h6>
            <p className="description">{blog.description.substring(0, 50)}...</p>
            <Link to={`/blogs/${blog._id}`} className="read-more-button">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
