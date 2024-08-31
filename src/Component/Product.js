import React from 'react';
import './Product.css'; // Make sure this CSS file exists for custom styles

export default function Product(props) {
  return (
    <div className="product-box">
      <div className="product-details">
        <h2>{props.Product.itemname}</h2>
        <p>Price: {props.Product.itemprice}</p>
        <p>Quantity: {props.Product.itemquantity}</p>
      </div>
      <div className="btn-group" role="group" aria-label="Product actions">
        <button type="button" className="btn btn-danger" onClick={() => { props.incrementCount(props.index) }}>
          +
        </button>
        <button type="button" className="btn btn-warning">
          Quantity
        </button>
        <button type="button" className="btn btn-success" onClick={() => { props.decrementCount(props.index) }}>
          -
        </button>
        <div className="btn-total">
          {props.Product.itemquantity * props.Product.itemprice}
        </div>
      </div>
    </div>
  );
}
