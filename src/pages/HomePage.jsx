import PostsList from "../components/PostsList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function HomePage() {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div className="home-page">
            <SearchBar onSearchChange={(isActive) => setIsSearching(isActive)} />
            {!isSearching && <PostsList />}
        </div>
    );
}
