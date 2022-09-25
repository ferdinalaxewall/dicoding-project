import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable() {
  return (
    <div className='container'>
      <SearchBar />
      <ProductTable />
    </div>
  )
}
