import React from 'react';

export default function CartItem({item,value}) {


    const{id,name,img,total,count} =item;

    const{increment,decrement,removeItem}= value;

    return (

        <div className= "row my-2 text-capitalise text-center">

        <div className="col-10 mx-auto col-lg-2">

        <img src={img} style={{width:"5rem",height="5rem"}}
        className="img-fluid" alt="product"/>
         </div>

            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product:</span>
            {name}                    </div>

            <div className="col-10 mx-auto col-lg-2">
                Price:
                {price}                    </div>

                       
<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">

<div className="d-flex justify-center-center">


<div>

<span className ="btn blt-black mx-1" onClick={()=>decrement(id)}> - </span>

<span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}> + </span>


</div>



</div>


</div>
{/**/} 
            <div className="col-10 mx-auto col-lg-2">

            <div className = "cart-icon" onClick={removeItem(id)}>
              <i className="fas fa-trash"></i>  
            </div>
                </div>




            <div className="col-10 mx-auto col-lg-2">
            <strong> item total : £{total}</strong>
                                    </div>



            
        </div>
    );

}
