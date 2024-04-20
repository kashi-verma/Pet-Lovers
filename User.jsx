const User = () => {
  return (
    <>
     
      <div className="modal-dialog modal-dialog-scrollable">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                 Profile Information
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body bg-dark"> <form action="">
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
                </form></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
