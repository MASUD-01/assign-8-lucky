import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singaldog from '../SingalDog/Singaldog';


const Dogs = () => {
    const [dogs, setDog] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setDog(data))
    }, [])
    const [carts, setCart] = useState([])
    console.log(carts)
    const handleCart = (products) => {
        const exists = carts.find(product => product.id === products.id);
        if (!exists) {
            if (carts.length < 4) {
                const newCarts = [...carts, products];
                setCart(newCarts)
            }
        }
    }
    const resetSetProduct = (id) => {
        setCart(id)
    }
    return (
        <div className='row'>
            <div className='col-md-8 col-sm ms-auto'>
                <div className='row ms-auto p-2'>

                    <h1 className='text-center mb-5'>Favourite Dogs</h1>
                    {
                        dogs.map(dog => <Singaldog key={dog.id} handleCart={handleCart} dog={dog}></Singaldog>)
                    }

                </div>
            </div>
            <div className='col-md-4 col-sm bg-secondary p-5 text-white text-center sticky'>
                <h2>Selected Dogs</h2>
                <Cart reset={resetSetProduct} added={carts}></Cart>
            </div>
        </div>
    );
};

export default Dogs;