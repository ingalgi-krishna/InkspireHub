import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/commentform.css'

const CommentForm = ({ blogId, fetchBlog }) => {
  const [comment, setComment] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          const response = await axios.get('https://dev-bilqjdv3oi0m7llx.us.auth0.com/api/v2/users/' + user.sub, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setUserProfile(response.data);
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      // Handle authentication requirement
      return;
    }

    const commentData = {
      author: userProfile?.name || user.name, // Use the name from user profile if available
      content: comment,
    };

    await axios.post(`http://localhost:5000/blogs/${blogId}/comments`, commentData);
    setComment('');
   <div className="fetch">{fetchBlog}</div>  // Fetch the updated blog after submitting the comment
  };

  return (
    
    
    <form onSubmit={handleCommentSubmit}>
      {userProfile && userProfile.picture && (
        <img src={userProfile.picture} alt="Profile" style={{ width: '50px', borderRadius: '50%' ,color: '#fc7753ff'}} />
      )}
      <input
        type="text"
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
