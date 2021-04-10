import React from 'react'

const Search = ({searchTerm, handleChange}) => {
    return (
        <section className="search-container">
            <input type="text" placeholder="Type here..." value={searchTerm} onChange={handleChange}
        /> 
        </section>
    )
}

export default Search
