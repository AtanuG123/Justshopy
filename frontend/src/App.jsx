
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import "./App.css";
import Navber from "./component/navber";

import Home from "./Pages_Js/home";
import Productlist from "./Pages_Js/Productlist";
import Productpage from "./Pages_Js/productpage";
import Signup from "./component/log_signup/signup";
import Login from "./component/log_signup/login";
import Userprofile from "./Pages_Js/userprofile";
import Cart from "./Pages_Js/cart";

import Product from "./component/productdetails/uploadadmin";



import LoadingSpinner from "./component/loader";
import AboutContact from "./Pages_Js/aboutus";
import Checkout from "./Pages_Js/checkoutpage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navber/>
      <Routes>
        <Route></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/:id" element={<Productpage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route  path="/admin" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/productlist/:id" element={<Productlist/>}></Route>
        <Route path="/user/:id" element={<Userprofile/>}></Route>
        <Route path="/aboutus" element={<AboutContact/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>

      </Routes>
      {/* <LoadingSpinner/> */}
    </BrowserRouter>      
  </div>
      
  );
}
export default App;
