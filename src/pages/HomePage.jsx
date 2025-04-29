import React, { useState, useEffect } from 'react';
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
import ScrollToTop from "../components/ScrollToTop";
import { getDataFetch, getSearchPost } from "../http";

export default function HomePage() {
    const [isSearching, setIsSearching] = useState(false);
    const [posts, setPosts] = useState([]);
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const data = await getDataFetch();
            setPosts(data.posts);
            setDisplayedPosts(data.posts);
        } catch (err) {
            setError("Failed to load posts. Please try again later.");
            console.error('Error fetching posts:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = async (searchTerm) => {
        if (!searchTerm.trim()) {
            setDisplayedPosts(posts);
            setIsSearching(false);
            return;
        }

        try {
            setIsSearching(true);
            const results = await getSearchPost(searchTerm);
            if (results && results.posts) {
                setDisplayedPosts(results.posts);
            }
        } catch (error) {
            console.error('Search failed:', error);
            setDisplayedPosts(posts);
        } finally {
            setIsSearching(false);
        }
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-message">{error}</div>
        );
    }

    return (
        <div className="home-page">
            <div className="home-page-header">
                <SearchBar onSearch={handleSearch} />
                <PostList posts={displayedPosts} isSearching={isSearching} />
            </div>
            
            <ScrollToTop />
        </div>
    );
}


// Todo:
// add not-found state
// list posts from home page
// send posts as params to PostsList
// avoid fetching data from SearchBar
// after update the value in SearchBar => refetch the posts
// update PostsList with new data
// use search api instead of filtering them client-side



//done 
