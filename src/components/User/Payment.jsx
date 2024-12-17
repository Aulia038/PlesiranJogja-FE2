// const Payment = () => {
// 	return (

// 	);
// }

// export default Payment;

import React from "react";
import bcaLogo from "../../assets/img/HOTEL/bca logo.png";
import "../../styles/hotel-payment-detail-last.css";

const PaymentDetails = ({ title, paymentInfo, totalPrice, instructions }) => {
  return (
    <div className="payment" style={{ marginTop: "130px" }}>
      <h2>{title}</h2>
      <div className="payment-method">
        <h2>Choose Payment Method</h2>
        <div className="va-box">
          <div className="va-details">
            <strong>
              Pay Before <span className="pay-before">{paymentInfo.payBefore}</span>
            </strong>
            <p>Virtual Account Number</p>
            <div className="va-number">
              <strong>{paymentInfo.virtualAccountNumber}</strong>
              <img src={bcaLogo} alt="Logo Bank" />
            </div>
            <p>Total</p>
            <p className="total">{paymentInfo.total}</p>
            <a href="#" className="details-link">
              Lihat Detail
            </a>
          </div>
        </div>
      </div>

      <div className="total">
        {totalPrice.map((item, index) => (
          <div className="total-item" key={index}>
            <strong>{item.label}</strong>
            <strong>{item.amount}</strong>
          </div>
        ))}
      </div>

      <div className="instructions">
        <h2>{instructions.title}</h2>
        <ol>
          {instructions.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default PaymentDetails;
