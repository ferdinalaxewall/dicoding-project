import React from 'react'
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable() {
  return (
    <div className='product-table-wrapper'>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <ProductCategoryRow name="Sporting Goods" />
            <ProductRow name="Footbal" price="$49.99" />
            <ProductRow name="Baseball" price="$9.99" />
            <ProductRow name="Basketball" price="$29.99" />
            <ProductCategoryRow name="Electronics" />
            <ProductRow name="iPod Touch" price="$99.99" />
            <ProductRow name="iPhone 5" price="$399.99" />
            <ProductRow name="Nexus 7" price="$199.99" />
        </table>
    </div>
  )
}
