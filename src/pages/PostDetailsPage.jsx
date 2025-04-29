import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostById } from '../http';
import Post from '../components/Post';

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching post with ID:', id);
        const data = await getPostById(id);
        console.log('Received post data:', data);
        setPost(data);
      } catch (err) {
        console.error('Error details:', err);
        setError('Failed to load post. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  console.log('Current state:', { post, isLoading, error });

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!post) {
    return <div className="error-message">Post not found</div>;
  }

  return (
    <div className="post-details-page">
      <Post 
        title={post.title}
        body={post.body}
        tags={post.tags || []}
        reactions={post.reactions}
      />
    </div>
  );
};

export default PostDetailsPage; 