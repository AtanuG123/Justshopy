import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function OrderDetails(){
    const{id} = useParams();
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_PORT}/orderdetailspage`, {id})
    }).then( res=>console.log(res))

    
  const orderData = {
    orderNumber: "ORD-2024-0123",
    status: "Shipped",
    estimatedDelivery: "January 25, 2024",
    items: [
      { id: 1, name: "Wireless Headphones", quantity: 1, price: 129.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
      { id: 2, name: "Smart Watch", quantity: 1, price: 299.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
      { id: 3, name: "Bluetooth Speaker", quantity: 2, price: 79.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1" }
    ],
    deliveryAddress: {
      street: "123 Tech Street",
      city: "Silicon Valley",
      state: "CA",
      zipCode: "94025"
    },
    paymentMethod: "Credit Card ending in 4242",
    discounts: [
      { code: "WINTER2024", amount: 50.00 },
      { code: "FREESHIP", amount: 15.00 }
    ]
  };

  const calculateSubtotal = () => {
    return orderData.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountTotal = orderData.discounts.reduce((acc, discount) => acc + discount.amount, 0);
    return subtotal - discountTotal;
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Order Details</h2>

      {/* Order Summary */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Order #{orderData.orderNumber}</h5>
          <p><strong>Status:</strong> <span className="badge bg-info text-dark">{orderData.status}</span></p>
          <p><strong>Estimated Delivery:</strong> {orderData.estimatedDelivery}</p>
        </div>
      </div>

      {/* Items List */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Items</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th className="text-end">Price</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData.items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={item.image} alt={item.name} className="me-2 rounded" style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                      {item.name}
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td className="text-end">${item.price.toFixed(2)}</td>
                  <td className="text-end">${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delivery & Payment Information */}
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Delivery Address</h5>
              <p>
                {orderData.deliveryAddress.street} <br />
                {orderData.deliveryAddress.city}, {orderData.deliveryAddress.state} {orderData.deliveryAddress.zipCode}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Payment Method</h5>
              <p>{orderData.paymentMethod}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Order Summary</h5>
          <p><strong>Subtotal:</strong> ${calculateSubtotal().toFixed(2)}</p>
          {orderData.discounts.map((discount, index) => (
            <p key={index} className="text-success">
              <strong>Discount ({discount.code}):</strong> -${discount.amount.toFixed(2)}
            </p>
          ))}
          <hr />
          <h4>Total: ${calculateTotal().toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};


