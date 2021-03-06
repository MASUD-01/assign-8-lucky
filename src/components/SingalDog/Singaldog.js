import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Card } from 'react-bootstrap';
import './Singaldog.css'


const Singaldog = (props) => {
    const { img, name, price } = props.dog
    const { handleCart } = props
    return (
        <div className='singaldog mb-2 col-md-4 col-sm-12 ms-auto text-center'>
            <div>
                <Card style={{ width: '18rem', margin: '0 auto', height: "320px" }} className="text-center w-75">
                    <Card.Img variant="top" className='ms-auto text-center h-50' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            price:{price}
                        </Card.Text>
                        <button className='btn bg-primary w-100' onClick={() => handleCart(props.dog)}>
                            <FontAwesomeIcon icon={faShoppingCart} /><p className='w-100 text-white m-0 p-0'>addToCart</p>
                        </button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Singaldog;