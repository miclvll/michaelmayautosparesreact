import React, { Component } from "react";
import defaultimg from "../images/logo.png";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { PartsContext } from "../context";
import StyledHero from "../components/StyledHero";
import Button from '../components/Button';

export default class SinglePart extends Component {
  constructor(props) {
    super(props);

    /* console.log(props);this gives you access to params,slug history on a single call without having to set up an api call via ComponentDidMount */

    this.state = {
      slug: this.props.match.params.slug,

      defaultimg,
    };
  }

  static contextType = PartsContext;

  render() {
    const { getPart } = this.context;

    const part = getPart(this.state.slug);

    if (!part) {
      return (
        <div className="error">
          <h3>Sorry,no such part found....</h3>

          <Link to="/parts" className="btn-primary">
            Back to Parts{" "}
          </Link>
        </div>
      );
    }

    const {
      id,
      name,
      brand,
      model,
      description,
      compatibilityimages,
      price,
    } = part;

    const [mainImg, ...defaultimg] = images;

    return (
      <>
        <StyledHero image={mainImg || this.state.defaultimg}>
          <Banner title={`${name} part`}>
            <Link to="/parts" className="btn-primary">
              Back to Parts
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <images key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>info</h3>
              <h6>price : £{price}</h6>
              <h6>Brand : {brand}</h6>
              <h6>Model : {model}</h6>
              <h6>
                Quantity :{" "}
                {quantity < 1
                  ? `${quantity} out of stock`
                  : `${quantity} in stock `}
              </h6>

              <h6>{collection ? "collection allowed" : "postage only"}</h6>

              <h6>{postage && " collection allowed"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>Compability</h6>
          <ul className="extras">
            {compatibilityimages.map((item, map) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>

        {/*buttons */}

        <div>
        <Link to = "/">
        <ButtonContainer cart
        disabled={inCart? true:false}
        onClick={()=>(value.addToCart(id))}
        >
          {inCart? "in cart" : "add to cart"}
        </ButtonContainer>

        </Link>

        </div>

</>
      
    );
  }
}
