import React from 'react';
import{Link} from 'reacr-router-dom';

export default function CartTotals({value}) {


    const{cartSubTotal,carTax,clearCart}=value;

    


    return (
        <>

        <div className = "container">

        <div className="row">

        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">

        <Link to = "/">

        <button 
        className="btn btn-outline-danger text-uppercase mb-3 px-5"

        type="button"

        onClick={()=>clearCart()}

        >Clear Cart

        </button>

        </Link>

        <h5>

        {/*need to create a css for this subtotal */}

        <span>sub total: </span>

        <strong>£ {cartSubTotal}</strong>

        </h5>

                        <h5>
                        
                        <span>VAT</span>

                            <strong>£{cartTax}</strong>
                            </h5>

                        <h5>

                            <span>Total</span>

                            <strong>£{cartTotal}</strong>
                        </h5>  






        

        

    




       






        







        </div>





</div>
        </div>






            
     </>   
    )
}

