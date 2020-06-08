import React from 'react';
import Part from './Part';

export default function PartsList({parts}) {

    if(parts.length===0){

        return(
<div className = "empty-search">
<h3>Unfortunately no parts matched your parameters</h3>

</div>
)



    }
    return (
        
            
        <section className="roomslist">
        <div className="roomslist-center">
        {
         parts.map(item=> {

         return <Part key={item.id} part={item}/>;

         })

        }


        </div>
        </section>

    );
}
