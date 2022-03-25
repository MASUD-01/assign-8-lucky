import React from 'react';

const Cart = (props) => {
    const { name } = props
    // let store = [];
    return (

        <div>
            <h1>Name:{name}</h1>
            <button>choose 1 for me</button>
            <button>choose again</button>
        </div>
    );
};

export default Cart;