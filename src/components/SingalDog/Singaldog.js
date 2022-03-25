import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Card } from 'react-bootstrap';
import './Singaldog.css'


const Singaldog = (props) => {
    const { img, name, price } = props.dog
    const { handleCart } = props
    return (
        <div className='singaldog mb-2 col-md col-sm ms-auto text-center'>
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        price:{price}
                    </Card.Text>
                    <button className='btn bg-primary w-100' onClick={() => handleCart(name)}>
                        <FontAwesomeIcon icon={faSquare} /><p className='w-100 text-white m-0 p-0'>addToCart</p>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Singaldog;