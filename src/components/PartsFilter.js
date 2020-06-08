import React from 'react';
import {useContext} from 'react';
import {PartsContext} from "../context";
import Title from "../components/Title";



//get all unique values

const getUnique = (items,value) => {

    return [...new Set(items.map(item=>item(value)))]



}
export default function PartsFilter({parts}) {


    const context = useContext(PartsContext);

     const{handleChange,type,quantity,minPrice,maxPrice,category,brand}= context;


     //get unique types 

     let types = getUnique(parts,'type');

     //add all

     types =['all',...types];

     //map to jsx

     types = types.map((item,index)=> {

        return( <option value={item} key={index}>{item}</option>
     );

    });

    let stock = getUnique(parts,'quantity');

    stock = stock.map((item,index)=>{

        return(<option key={index } value={item}>{item}</option>);


    });
    return (
      <section className="filter-container">
        <Title title="Search for parts" />

        <form className="filter-form">
          {/* select type  */}

          <div className="form-group">
            <label htmlFor="type">Category</label>

            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>

          {/*  end of select type-category */}

          {/*select brand/make */}

          <div className="form-group">
            <label htmlFor="brand">Make/Brand</label>

            <select
              name="brand"
              id="brand"
              value={brand}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>

          {/* end of select brand/make */}

          {/* select model   */}

          <div className="form-group">
            <label htmlFor="model">Model</label>

            <select
              name="model"
              id="model"
              value={model}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
        </form>
      </section>
    );
}

/*

                

<div className="form-group">

    <label htmlFor="quantity">Quantity</label>

    <select

        name="quantity" id="quantity" value={quantity}
        className="form-control"
        onChange={handleChange}>
        {types}
    </select>

</div>



<div className="form-group">

    <label htmlFor="price">Parts price ${price}</label>

    <input
        type="range" name="price"
        min={minPrice} max={maxPrice} id="price"
        value={price} onChange={handleChange} className="form-control" />

</div>



<div className="form-group">

    <label htmlFor="weight"></label>

    <div className="size-inputs">

        <input type="number" name="max-size" id="size" value={maxSize} onChange={handleChange} className="size-inputs" />


        <input type="number" name="min-size" id="size" value={minSize} onChange={handleChange} className="size-inputs" />





    </div>
</div>



<div className="form-group">

    <div className="single-extra">

        <input type="checkbox" name=" collection" />
                 id="collection" checked={collection}

        <label htmlFor="collection">collection</label>
    </div>

    <div className="single-extra">

        <input type="postage" name=" postage"
            id="postage" checked={postage} onChange={handleChange} />

        <label htmlFor="postage">postage</label>
    </div>
    </div>

*/









    

