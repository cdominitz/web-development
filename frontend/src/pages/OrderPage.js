import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({myProducts}){
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    return(
        <>
        <h2>Product Order Form</h2>
        <article>
        <form action="/order" method="POST">
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
            
            <label for="firstlast" class="required">First and Last Name:</label>
            <input type="text" value={name} required="true" onChange={e => setName(e.target.value)} />
            
    
            <label for="email" class="required">Email Address:</label>
            <input type="text" value={email} required="true" onChange={e => setEmail(e.target.value)} />

            <label for="address" class="required">Address:</label>
            <input type="text" value={address} required="true" onChange={e => setAddress(e.target.value)} />

            <label for="delivery">Please enter any special delivery instructions below:</label>
            <textarea name="delivery" id="delivery"></textarea>
            <label><button onClick={e => {
                    setName(e.target.value);
                    setEmail(e.target.value);
                    setAddress(e.target.value);
                    alert(`Hello, ${name}.
                        Thank you for your order! 
                        It will be delivered to ${address}`); 
                    e.preventDefault();
                    }}>Submit</button></label>
            </form>
        </article>
        </>
    );
}

export default OrderPage;