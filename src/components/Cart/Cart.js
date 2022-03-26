import React from 'react';

const Cart = (props) => {
    const { carts, reset } = props
    console.log(carts)
    const chooseForme = (carts) => {
        var item = carts[Math.floor(Math.random() * carts.length)]
        console.log(item)
    }


    let id = [];
    return (

        <div>
            {carts.map((item => <h5>{item.name}</h5>))}
            <button onClick={chooseForme(carts)} className='btn btn-success mb-2' >choose 1 for me</button> <br></br>
            <button className='btn btn-primary' onClick={() => { reset(id) }}>choose again</button>
        </div>
    );
};

export default Cart;