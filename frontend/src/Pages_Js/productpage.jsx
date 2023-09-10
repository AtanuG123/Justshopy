import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";
import LoadingSpinner from "../component/loader";
import Copyright from "../component/Footer";
import { addtocart, subtotal } from "../state/cart";
import "../Pages_css/productpage.css";
import Navber from "../component/navber";

export default function Productpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [size, setsize] = useState(null);
  const [flag, setflag] = useState(0);
  const [singleproduct, setsingleproduct] = useState([]);
  const [photo, setphoto] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const user = useSelector((state) => state.profile.data);
  const cart = useSelector(state=>state.cart.data);
  const Customid = id;

  useEffect(() => {
    document.getElementById("product_p").style.display = "none";
    setisLoading(true);
    axios.post("http://127.0.0.1:3002/product", { Customid }).then((res) => {
      setsingleproduct(res.data);
      console.log(res.data);
      console.log("hehe1", res.data.Img2);
      setphoto(res.data.Img1);
      setisLoading(false);
      document.getElementById("product_p").style.display = "flex";
    });
  }, []);
  if (singleproduct.Img2 !== null) {
    console.log("not null");
  } else {
    document.getElementById("small_img2").style.display = "none";
  }

  if (singleproduct.Img3 !== null) {
    console.log("not null");
  } else {
    document.getElementById("small_img3").style.display = "none";
  }

  if (singleproduct.Img4 !== null) {
    console.log("not null");
  } else {
    document.getElementById("small_img4").style.display = "none";
  }

  if (singleproduct.Img5 !== null) {
    console.log("not null");
  } else {
    document.getElementById("small_img5").style.display = "none";
  }
  const addcartnotify = () => {
    toast.success("succesfully added to cart", {
      autoClose: 2000,
      position: "top-right",
      theme: "colored",
      className: "toast-message",
    });
  };

  const addednotify = (massage) => {
    toast.info(massage, {
      autoClose: 2000,
      position: "top-right",
      theme: "colored",
      className: "toast-message",
    });
  };

  const fordispatch = (e) => {
    if (user !== "invalid" && size != null && flag === 0) {
      setflag(1);
      if (singleproduct.Customid in cart){
        console.log(cart);
      }
      addcartnotify();
      dispatch(
        addtocart({
          id: singleproduct.Customid,
          img: singleproduct.Img1,
          description: singleproduct.Descrip,
          price: singleproduct.Price,
          name: singleproduct.Name,
          discount: singleproduct.Discount,
          size: size,
        })
      );
      dispatch(subtotal(singleproduct.Price));
    } else if (user !== "invalid" && size === null) {
      addednotify("select size");
    } else if (flag === 1) {
      addednotify("already added");
    } else {
      addednotify("Signup before Proced");
      // navigate("/signup");
    }
  };

  const mainphotochange = (img) => {
    setphoto(img);
  };

  return (
    <> 
    {/* <Navber/> */}
      {isLoading ? <LoadingSpinner /> : null}
      <ToastContainer/>
      <div id="product_p" style={{ flexDirection: "column" }}>
        <div className="product_part">
          <div className="img_part">
            <div className="main_img">
              <img src={photo} alt="error"></img>
              <span
                style={{ translate: "-140% 70%", backgroundColor: "blue" }}
                class="position-absolute  badge rounded-pill"
              >
                <i className="fa-regular fa-heart whishlist"></i>
              </span>
            </div>
            <div className="all_img">
              <img
                className="small_img"
                alt="productphoto"
                onClick={() => mainphotochange(singleproduct.Img1)}
                src={singleproduct.Img1}
              ></img>
              <img
                id="small_img2"
                className="small_img"
                alt="productphoto"
                onClick={() => mainphotochange(singleproduct.Img2)}
                src={singleproduct.Img2}
              ></img>
              <img
                id="small_img3"
                className="small_img"
                alt="pph3"
                onClick={() => mainphotochange(singleproduct.Img3)}
                src={singleproduct.Img3}
              ></img>
              <img
                id="small_img4"
                className="small_img"
                alt="pph4"
                onClick={() => mainphotochange(singleproduct.Img4)}
                src={singleproduct.Img4}
              ></img>
              <img
                id="small_img5"
                className="small_img"
                alt="pph5"
                onClick={() => mainphotochange(singleproduct.Img5)}
                src={singleproduct.Img5}
              ></img>
            </div>
          </div>

          <div className="descrip_part">
            <h3 className="product_name">{singleproduct.Name}</h3>
            <p className="product_brand">Brand : {singleproduct.Brand}</p>
            <div className="product_price">
              <div className="actual_mrp">
                <h4> ₹{singleproduct.Price}</h4>
              </div>
              <div className="mrp">
                <p className="mrp1">
                  {Math.round(
                    (100 * singleproduct.Price) / (100 - singleproduct.Discount)
                  ) + singleproduct.Price}
                </p>
                <p>({singleproduct.Discount} % Off)</p>
              </div>
            </div>
            <div className="instock">
              <p>In Stock</p>
            </div>

            <div className="product_size">
              <p> SELECT SIZE</p>
              <div>
                <button onClick={() => setsize("S")} className="size">
                  S
                </button>
                <button onClick={() => setsize("M")} className="size">
                  M
                </button>
                <button onClick={() => setsize("L")} className="size">
                  L
                </button>
                <button onClick={() => setsize("XL")} className="size">
                  XL
                </button>
                <button onClick={() => setsize("XXL")} className="size">
                  XXL
                </button>
              </div>
            </div>
            <div className="product_cart">
              <div className="product_cart1" >
                <button onClick={fordispatch}>Add to cart</button>
               
              </div>
            </div>

            <div className="product_des">
              <p>PRODUCT DETAILS</p>
              <h6>{singleproduct.Descrip}</h6>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
}
