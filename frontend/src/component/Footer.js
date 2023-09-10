
import "./copyright.css";
export default function Copyright() {
  return (
    <div className="container" style={{ maxWidth: "1100px" }}>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#738aaf", margin: "10px 0px" }}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <img style={{width:"260px"}} src={require("./images/logo.png")}></img>
               
              </div>
             

              <hr className="w-100 clearfix d-md-none" />

             
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white">Hoodies</a>
                </p>
                <p>
                  <a className="text-white">T-shirt</a>
                </p>
                <p>
                  <a className="text-white">Jeans</a>
                </p>
                <p>
                  <a className="text-white">Kurta</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Kolkata ,700031</p>
                <p><i className="fas fa-envelope mr-3"></i><a> ghoshavi924@gmail.com</a> </p>
                <p><i className="fas fa-phone mr-3"></i> 7439259722</p>
              </div>
            </div>
          </section>


          <hr className="my-3" />


          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright:
                  <a className="text-white" >Atanupersonal.com </a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating text-white" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating text-white" role="button"><i className="fab fa-twitter"></i></a>
                <a className=" btn btn-outline-light btn-floating text-white" role="button"><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-light btn-floating text-white" role="button" ><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}