import React from 'react'

const Search = ({searchTerm, handleChange, handleSubmit}) => {
    return (
        <section className="search-container" onSubmit={handleSubmit}>
            <form className='form' >
            <input type="text" placeholder="Type here..." value={searchTerm} onChange={handleChange}/> 
            <button type='submit'><i className="fas fa-search"></i></button>
            </form>
        </section>
    )
}

export default Search
