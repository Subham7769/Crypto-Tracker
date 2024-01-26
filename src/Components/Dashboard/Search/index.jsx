import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({search, setSearch}) => {


  return (
    <div className='Search-flex'>
       <span className='search-container'>
        <SearchIcon />
        <input type='text' className='input-text' placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </span>
    </div>
  )
}

export default Search