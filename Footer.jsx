import img1 from "../images/logo-3G7yoXPE.jpg"
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container-fluid">
          <div className="row gx-0">
            <div className="col-md-3">
              <div className="Footer_col1">
                
                <h3>About Us</h3>
                <p className="py-3">
                We are a team of pet lovers who are passionate
                 about providing our furry friends with the best
                  possible nutrition.
                </p>
                <div className="icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-youtube"></i>
                   
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="Footer_col2 ps-md-3">
                <h3>Information</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                  <a href="#">About Us</a>
                  </li>
                  <li><a href="#">Testimonial</a>
                  </li>
                  <li><a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="Footer_col2">
              <h3>Our Policy</h3>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                  <a href="#">Shipping Policy</a>
                  </li>
                  <li><a href="#">Copyright Policy</a>
                  </li>
                  <li><a href="#">FAQS</a>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="Footer_col3">
                <h3>Contact Us</h3>
                <p className="py-2">delicious food that is made with 
                high-quality ingredients. That's why we source our ingredients
                </p>
                <form><input className="form-control form-control-lg my-2 rounded-0" type="email" placeholder="Email"/>
                  <button className="btn1  w-100" type="submit">Submit</button></form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
      crossorigin="anonymous"></script>
    </>
  );
};

export default Footer;
