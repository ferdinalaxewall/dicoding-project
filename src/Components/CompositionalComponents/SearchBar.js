import React from 'react'

export default function SearchBar() {
  return (
    <div className='search-bar-container'>
        <input type="search" placeholder='Search...' />
        <div className='search-bar-checkbox-group'>
            <input type="checkbox" id='in-stock-checkbox' name='in-stock-checkbox' />
            <label for="in-stock-checkbox">Only show products in stock</label>
        </div>
    </div>
  )
}
