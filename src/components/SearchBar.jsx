import { useState, useEffect } from "react";
import PostCard from "./PostCard";

export default function SearchBar({ onSearchChange }) {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('https://dummyjson.com/posts');
                const data = await res.json();
                setPosts(data.posts);
                setFilteredPosts(data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);

    useEffect(() => {
        if (search.trim() === '') {
            setFilteredPosts(posts);
            onSearchChange(false);
        } else {
            const filtered = posts.filter(post => 
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredPosts(filtered);
            onSearchChange(true);
        }
    }, [search, posts, onSearchChange]);

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    const listItem = filteredPosts.map(post => (
        <PostCard key={post.id} title={post.title} tags={post.tags}>
            {post.body}
        </PostCard>
    ));
    
    return (
        <div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search posts..." 
                    value={search}
                    onChange={handleSearch} 
                />
            </div>
            <div className="card-container">
                {search.length > 0 && listItem}
            </div>
        </div>
    );
}


