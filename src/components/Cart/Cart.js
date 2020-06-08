import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {PartsConsumer} from '../../context';
import CartList from './Cartlist';
import CartTotals from './CartTotals';


export default class Cart extends Component {
    render() {
        return (
          <section>
            <PartsConsumer>
            {value =>{

                const {cart} = value;

                if (cart.length>0){

                    return (

                        <>
                        <Title title="Your shopping cart" />
              <CartColumns />
              <CartList value={value}/>
              <CartTotals value={value}/>
              </>
              );
         

                }else{return <EmptyCart />;}


            }}
              </PartsConsumer>
              
            
          </section>
        );
    }
}
