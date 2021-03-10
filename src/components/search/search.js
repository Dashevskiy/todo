import React from 'react'
import './search.css'

const Search = ({search}) => {

    return (
        <div className='search-panel'>
        <input  className="form-control search-input" type='text' onChange={(e)=>search(e)} placeholder='search'/>
        </div>
    )
}

export default Search;