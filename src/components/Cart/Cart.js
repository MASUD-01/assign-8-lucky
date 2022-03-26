import React from 'react';

const Cart = (props) => {
    const { carts, reset } = props

    let id = [];
    return (

        <div>
            {carts.map((item => <h5>{item.name}</h5>))}
            <button className='btn btn-success mb-2' >choose 1 for me</button> <br></br>
            <button className='btn btn-primary' onClick={() => { reset(id) }}>choose again</button>
        </div>
    );
};

export default Cart;