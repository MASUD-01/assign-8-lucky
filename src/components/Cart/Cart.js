import React, { useState } from 'react';

const Cart = (props) => {
    const { carts, reset } = props

    const [set, setCart] = useState([])
    console.log(set)
    const chooseForMe = () => {
        const addedProducts = carts[Math.floor(Math.random() * carts.length)];
        console.log(addedProducts)
        setCart(addedProducts)
    }

    let id = [];
    return (

        <div>
            {carts.map((item => <h5>{item.name}</h5>))}
            <p>{set.name}</p>
            <button onClick={chooseForMe} className='btn btn-success mb-2' >choose 1 for me</button> <br></br>
            <button className='btn btn-primary' onClick={() => { reset(id) }}>choose again</button>
        </div>
    );
};

export default Cart;