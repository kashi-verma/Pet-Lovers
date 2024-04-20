const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <div className="contact_col1"></div>
            </div>
            <div className="col-md-8">
              <h2 className="h2_main text-center">
                <span>Contact</span>Us From
              </h2>
              <p className="text-center p_main">
                Our website is always active to contact with customers so feel
                free to contact
              </p>
              <div className="contact_col2">
                <form action="">
                <div className="Contact_col d-flex">
                  <input
                    className="form-control form-control-lg my-3"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="form-control form-control-lg my-3 ms-2"
                    type="number"
                    placeholder="Number"
                  />
                </div>
                <input
                  className="form-control form-control-lg my-2 "
                  type="email"
                  placeholder="Email"
                />
                <select
                  className="form-select form-select-lg my-3"
                  aria-label="Large select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <textarea name id rows="6" placeholder="Subject"></textarea>
                <button className="btn1 mt-3 w-100" type="submit">
                  Submit
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
