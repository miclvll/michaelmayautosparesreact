import React from 'react';
import CartItem from './CartItem';

export default function Cartlist({value}) {

    const {cart} =value;
    return (

       
        <div className="container-fluid">

        {cart.map(item=>{

            return <




        })}




        </div>
            
        </div>
    )
}

