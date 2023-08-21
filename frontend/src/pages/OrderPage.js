import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({myProducts}){
    return(
        <>
        <h2>Product Order Form</h2>
        <article>
            <p>Please fill out this form to place your order</p>
                    <table id="productTable">
                        <caption>Use the buttons to select your quantities</caption>
                        <thead>
                          <tr>
                            <th>Item, Company</th>
                            <th>Price</th>
                            <th>Choose Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                            {myProducts.map((product, index) => 
                                <ProductRow 
                                myItem={product} 
                                key={index} 
                                />
                            )}
                        </tbody>
                    </table>
        </article>
        </>
    );
}

export default OrderPage;