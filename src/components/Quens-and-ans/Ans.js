import React from 'react';

const Ans = () => {
    return (
        <div className='p-4'>
            <h2>Q:How React works?</h2>
            <p>Ans:react works unidirectional data flow. react creates its own virtual dom.if need any changes react compare to virtual DOM and Real DOM. Then adjectly where need changes,react do that immidiatley.</p>

            <h2>Q:Props Vs state?</h2>
            <p>Ans:State is the local state of the component which cannot  access and modified outside of the component. It's related to local variables in a function. Props make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
        </div>
    );
};

export default Ans;