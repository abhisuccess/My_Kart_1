import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    <div>
      {props.productsBasket.map((product, i) => (
        <Product Product={product} key={i} incrementCount={props.incrementCount} index={i} decrementCount={props.decrementCount} indexi={i}/>
      ))}
    </div>
  );
}
