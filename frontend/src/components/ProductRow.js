import React from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({myItem}){
    return(
        <tr>
            <td>{myItem.product} from {myItem.company}</td>
            <td>{myItem.price.toLocaleString('en-US', {style: 'currency', currency:"USD"})}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow;
