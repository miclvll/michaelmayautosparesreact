import React from 'react';
import PartsFilter from "./components/PartsFilter";
//import PartsList from "./components/PartsList";
import {PartsContainer} from '../context';
import Loading from './Loading';
import {withPartsConsumer} from "../context";

function PartsContainer({bits}){

    const {loading,sortedParts,parts}=bits;


    if (loading) {

        return <Loading />;
    }
    return (

        <>
            <PartsFilter parts={PartsContainer} />

            <PartsList parts={sortedParts} />

        </>
    );

}

export default withPartsConsumer(PartsContainer)

/*
export default function PartsContainer() {
    return (
        <PartsConsumer>

    {value=> {
        
        const{loading,sortedParts,parts} = value;

if(loading){

    return <Loading/>;
}
        return(

            <div>
            <PartsFilter/>

            <PartsList parts={sortedParts}/>

            </div>
        );

        }}


        </PartsConsumer>
    );
}
*/
