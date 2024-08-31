import React from 'react';
import './Footer.css'; 

export default function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <button className="btn btn-danger btn-sm" onClick={props.handlePay}>Pay Now</button>
          </div>
          <div className="col text-center text-white">
            <h5>Total Amount: {props.totalAmount}</h5> {/* Changed h4 to h5 */}
          </div>
          <div className="col-auto">
            <button className="btn btn-secondary btn-sm" onClick={() => { props.resetButton() }}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
