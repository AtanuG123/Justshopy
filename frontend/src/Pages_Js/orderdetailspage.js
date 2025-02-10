import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
// import OrderDetails from "../component/ordercard";
// import { Container } from "./Container";
// import { Button } from "./Button";
import { profile } from "../state/userprofile";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../component/loader";
const options: Options = {



  filename: "orderdetails.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.EXTREME,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: "letter",
    // default is 'portrait'
    orientation: "landscape"
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true
    }
  }
};

// you can also use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement, options);

export default function Orderdetailspage() {
  const user = useSelector(state => state.profile.data);
  const { id } = useParams();
  const [orders, setorders] = useState([]);
  const [orderitem, setorderitem] = useState([]);
  const [total, settotal] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  const Orderid = id;
  // console.log(Email);
  useEffect(() => {
    // // document.getElementById("ordpage").style.display = "none";
    // // document.getElementById("container").style.display = "none";
    // setisLoading(true);
    axios.post(`${process.env.REACT_APP_PORT}/orderdetailspage/`, { Orderid })
      .then((result) => {
        // console.log(result.data[0].Order);

        setorders(result.data[0]);
        setorderitem(result.data[0].Order);

        



      })
      // // document.getElementById("ordpage").style.display = "flex";
      // // document.getElementById("container").style.display = "flex";
      //   setisLoading(false);
  }, [Orderid]);

  // console.log(orders.Order)
  const orderData = {

    status: "Ordered",
    paymentMethod: "Credit Card ending in 4242",

  };

  


  return (
    <>
      {/* {isLoading ? <LoadingSpinner /> : null} */}
    <section>

      <div id="odrpage">
      <div id="container">
        <div className="card-container">
          <div className="container my-4">
            <h2 className="mb-4">Order Details</h2>

            {/* Order Summary */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Order # ORD-{orders.Orderid}</h5>
                <p><strong>Status:</strong> <span className="badge bg-info text-dark">{orderData.status}</span></p>
                <p><strong>Ordered at :</strong> {orders.Datetime}</p>
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

                    {/* <tr key={item.id}> */}
                    {orderitem.map((item) => {
                      return (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img src={item.img} alt={item.name} className="me-2 rounded" style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                              {item.name}
                            </div>
                          </td>
                          <td>{item.qty}</td>
                          <td className="text-end">₹{item.price.toFixed(2)}</td>
                          <td className="text-end">₹{(item.qty * item.price).toFixed(2)}</td>
                        </tr>
                      )
                    })}

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
                    {user.Name} <br />
                      {user.Address} <br />

                      {user.Pin}
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

                <h4>Total: ₹{orders.Amount}</h4>

                {/* <hr /> */}
              </div>
            </div>
          </div>
        </div>

      </div>
      <button className="btn btn-success" style={{ marginBottom: "20px" }} onClick={downloadPdf}>Download PDF</button>
      </div>
    </section>
    </>
  );
};


