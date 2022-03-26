import React from 'react';

const Cart = (props) => {
    const { name } = props.added
    console.log(props.added)

    return (

        <div>
            {props.added.map((item => <h5>{item.name}</h5>))}
            {/* <h1>Name:{name}</h1> */}
            <button>choose 1 for me</button>
            <button>choose again</button>
        </div>
    );
};

export default Cart;