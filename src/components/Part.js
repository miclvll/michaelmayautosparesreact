import React from "react";
import { Link } from "react-router-dom";
import defaultimg from "../images/logo.png";
import { PartsConsumer } from "../context";
import PropTyes from "prop-types";

export default function Part({ part }) 
{
  const { id,name, slug, images, price, inCart } = part;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <article className="room">
        <PartsConsumer>
          {(value) => (
            <>
              <div className="img-container">
                <img src={images[0] || defaultimg} alt="single part" />
                <div className="price-top">
                  <h6>£{price}</h6>
                  <p>excluding postage</p>
                </div>

                <Link to={`/parts/${slug}`} className="btn-primary room-link">
                  Full Details{" "}
                </Link>

                <p className="room-info">{name}</p>

                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalise mb-0" disabled>
                      {" "}
                      {""}
                      in Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            </>
          )}
        </PartsConsumer>
      </article>
    </ProductWrapper>
  );
}

Part.propTypes = {
  Part: propTypes.shape({
    name: PropTypes.string.isRequired,

    slug: PropTypes.string.isRequired,

    images: PropTypes.arrayOf(PropTyes.string).isRequired,

    price: PropTypes.number.isRequired,
  }),
};
