import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, isSearching }) => {
    if (!posts || posts.length === 0) {
        return (
            <div className="no-posts-message">
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 15h8" />
                    <path d="M9 9h.01" />
                    <path d="M15 9h.01" />
                </svg>
                <h3>No Posts Found</h3>
                <p>
                    {isSearching 
                        ? "We couldn't find any posts matching your search. Try different keywords or browse all posts."
                        : "There are no posts available at the moment. Check back later or be the first to create a post!"}
                </p>
            </div>
        );
    }

    return (
        <div className={`card-container ${isSearching ? 'search-results-loading' : ''}`}>
            {isSearching && <div className="search-loading-overlay" />}
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    tags={post.tags}
                    reactions={post.reactions}
                >
                    {post.body}
                </PostCard>
            ))}
        </div>
    );
};

export default PostList; 