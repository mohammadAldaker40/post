import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const searchInput = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSearch(searchInput.current.value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (!value.trim()) {
            onSearch('');
        }
    };

    return (
        <div className="search-bar">
            <Link id="linkBtn" to="/post/add-post">
                <button>Add Post</button>
            </Link>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    ref={searchInput}
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </div>
    );
}


