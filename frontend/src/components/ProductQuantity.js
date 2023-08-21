import React, { useState } from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

function ProductQuantity(){
    const [quantity, setQuantity] = useState(0);
    const more = () => setQuantity(quantity === 10 ? quantity : quantity + 1);
    const less = () => setQuantity(quantity === 0 ? 0: quantity - 1);

    return(
        <div className="">
            <AiFillCaretDown onClick={less} class="bigger" />
            <span className="qv">{quantity}</span>
            <AiFillCaretUp onClick={more} class="bigger" />
        </div>
    );
}

export default ProductQuantity;
