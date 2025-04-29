import { useEffect, useState } from 'react';
import PostCard from './PostCard';

export default function PostsList() {
    const [postslist, setPostslist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getPosts() {
            try {
                setIsLoading(true);
                const response = await fetch('https://dummyjson.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPostslist(data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        
        getPosts();
    }, []);
    
    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (postslist.length === 0) {
        return (
            <div className="no-posts-container">
                <p>No posts found</p>
            </div>
        );
    }

    return (
        <div className="card-container">
            {postslist.map((post) => (
                <PostCard 
                    key={post.id} 
                    id={post.id} 
                    tags={post.tags} 
                    title={post.title}
                >
                    {post.body}
                </PostCard>
            ))}
        </div>
    );
}
