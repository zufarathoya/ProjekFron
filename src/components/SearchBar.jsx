import React from "react";
import { MdSearch } from 'react-icons/md';
import './SearchBar.css';
const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit} /*onInput={handleSubmit}*/>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onInput={(event) => setQuery(event.target.value)}
                // onInput={(event) => setQuery(event.target.value)}
            /> 
            <button className="btn" disabled={isLoading || !query} type="submit"><MdSearch size='20px'/></button>
        </form>
    )
};

export default SearchBar;