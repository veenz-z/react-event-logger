function SearchBar({ searchQuery, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Search events..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}

export default SearchBar;
