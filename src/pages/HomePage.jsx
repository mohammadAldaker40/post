import PostsList from "../components/PostsList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function HomePage() {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div className="home-page">
            <div className="home-page-header">
                <Link id="linkBtn" to="/post/add-post">
                    <button>Add Post</button>
                </Link>
                <SearchBar onSearchChange={(isActive) => setIsSearching(isActive)} />
            </div>
            
            {!isSearching && <PostsList />}
        </div>
    );
}
