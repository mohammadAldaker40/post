import PostsList from "../components/PostsList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function HomePage() {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div className="home-page">
            <div className="home-page-header">
                
                <SearchBar onSearchChange={(isActive) => setIsSearching(isActive)} />
            </div>
            
            {!isSearching && <PostsList />}
        </div>
    );
}
