import React, { Component } from "react";
import Client from "./contentful";

Client.getEntries({
  content_type: "michaelmayautospares",
}).then(
  (getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "michaelmayautospares",
        order: "fields.category",
      });

      // can order by category,name etc
      //if you want by negative "-fields.price

      let parts = this.formatData(response.items);

      let featuredParts = parts.filter((part) => part.featured === true);

      let maxPrice = Math.max(...parts.map((item) => item.price));

      this.setState({
        parts,
        sortedParts: parts,
        featuredParts,
        loading: false,
        price: maxPrice,
        maxPrice,
        inCart,
      });
    } catch (error) {
      console.log(error);
    }
  })
);

const PartsContext = React.createContext();

export default class PartsProvider extends Component() {
  state = {
    parts: [],
    sortedParts: [],
    featuredParts: [],
    cart: [],
    loading: false,
    category: "all",
    quantity: 1,
    price: 0,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    // get data via contenful

    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;

      let images = item.fields.images.map((image) => image.fields.file.url);

      let part = { ...item.fields, images, id };

      return part;
    });

    return tempItems;
  }

  getPart = (slug) => {
    let tempItems = [...this.state.parts];
    const part = tempItems.find((part) => part.slug === slug);
    return part;
  };

  getItem = (id) => {
    const part = this.state.parts.find((item) => item.id === id);
    return part;
  };

  handleDetail = (id) => {
    const part = this.getItem(id);
    this,
      setState(() => {
        return { part: part };
      });
  };

  addToCart = (id) => {
    let tempParts = [...this.state.parts];
    const index = tempParts.indexOf(this.getItem(id));

    const part = tempParts[index];

    part.inCart = true;
    part.count = 1;
    const price = part.price;
    part.total = price;
    this.setState(
      () => {
        return { parts: tempParts, cart: [...this.state.cart, part] };
      },

      () => {
        this.addTotals();
      }
    );
  };
}

increment = (id) => {
  let tempCart = [...this.state.cart];
  const selectedPart = tempCart.find((item) => item.id === id);

  const index = tempCart.indexOf(selectedPart);

  const part = tempCart[index];

  part.count = part.count + 1;

  part.total = part.count * price;

  this.setState(
    () => {
      return { cart: [...tempCart] };
    },
    () => {
      this.addTotals();
    }
  );
};

decrement = (id) => {
  let tempCart = [...this.state.cart];
  const selectedPart = tempCart.find((item) => item.id === id);

  const index = tempCart.indexOf(selectedPart);

  const part = tempCart[index];

  part.count = part.count - 1;

  if (part.count == 0) {
    this.removeItem(id);
  } else {
    part.total = product.count * part.price;

    this.setState(() => {
      cart: [...tempCart];
    }),
      () => {
        this.addTotals();
      };
  }
};

removeItem = (id) => {
  let tempProducts = [...this.state.parts];
  let tempProducts = [...this.state.state.cart];

  tempCart = tempCart.filter((item = part.id != id));

  const index = tempProducts.indexOf(thisgetItem(id));

  let removedProduct = tempProducts[index];

  removedProduct.inCart = false;

  removedProduct.count = 0;

  removedProduct.total = 0;

  this.setState(
    () => {
      return {
        cart: [...tempCart],

        parts: [...tempProducts],
      };
    },
    () => {
      this.addTotals();
    }
  );
};

clearCart = () => {
  this.setState(
    () => {
      return { cart: [] };
    },
    () => {
      this.getData();
      this.addTotals();
    }
  );
};

addTotals = () => {
  let subTotal = 0;
  this.state.cart.map((item) => {
    subTotal += item.total;
  });

  const tempTax = subTotal * 0.125;

  const tax = parseInt(tempTax.toFixed(2));

  const total = subTotal + tax;

  this.setState(() => {
    return {
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: cartTotal,
    };
  });
};

handleChange = (event) => {
  const target = event.target;

  const value = target.type === "checkbox" ? target.checked : target.value;

  const name = event.target.name;

  this.setState({ [name]: value }, this.filterParts);
};

filterParts = () => {
  let { parts, category, price } = this.state;

  // all the parts
  let tempParts = [...parts];

  //transform the value

  quantity = parseInt(quantity);
  price = parseInt(price);

  //filter by category

  if (category !== "all") {
    tempParts = tempParts.filter((part) => part.category === category);
  }

  //filter by make/brand

  if (brand !== null) {
    tempParts = tempParts.filter((part) => part.brand === brand);
  }

  // filter by model

  if (model !== null) {
    tempParts = tempParts.filter((part) => part.model === model);
  }

  //filter by quantity

  if (quantity !== null) {
    tempParts = tempParts.filter((part) => part.quantity >= quantity);
  }

  //filter by price

  tempParts = tempParts.filter((part) => part.price <= price);

  this.setState({ sortedParts: tempParts });

  render();
  return (
    <PartsContext.Provider
      value={{
        ...state,
        getPart: this.getPart,
        getItem: this.getItem,
        handleDetail: this.handleDetail,
        handleChange: this.handleChange,
        addToCart: this.addToCart,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
      }}
    >
      {this.props.children}
    </PartsContext.Provider>
  );
};

const PartsConsumer = PartsContext.Consumer;

export function withPartsConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PartsConsumer>
        {(value) => <Component {...props} bits={value} />}
      </PartsConsumer>
    );
  };
}

export { PartsProvider, PartsConsumer, PartsContext };

/*


  need to run function to get frash data ie setProduct function
      
      setProducts=()=>{

        let tempProducts=.forEach(item=>{const singleItem={...part};
        
          tempProducts=[...tempProducts,singItem];
        });
        this.setState(()=>{

          return {parts:tempProducts};



        });

      };
        
        
      
      





filter by size

tempParts = tempParts.filter(part =>part.size >= minSize && part.size <= maxSize);

    filter by weight

    if(weight){

        tempParts=tempParts.filter(part=>part.weight===true)
    }





    filter by postage/collection

if (postage) {

    tempParts = tempParts.filter(part => part.postage === true)
}



 */
