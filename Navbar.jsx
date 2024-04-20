import img1 from "../images/logo-3G7yoXPE.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg Nav_main">
        <div className="container-fluid px-5 mx-3">
          <a className="navbar-brand" href="#">
            <img src={img1} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scrolls">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex nav_last" role="search">
              {/* <a
                href=""
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              > */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/6372/6372641.png"
                width="20"
                height="20"
                alt=" "
                title=" "
                className="img-small"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></img>
              {/* </a> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                width="20"
                height="20"
                alt=" "
                title=" "
                className="img-small-px2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              ></img>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1136/1136140.png"
                width="20"
                height="20"
                alt=" "
                title=" "
                className="img-small"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                arial-controls="offcanvasRight"
              ></img>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
