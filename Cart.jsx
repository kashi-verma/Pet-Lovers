const Cart = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body"></div>
        <div className="offcanvas-footer p-3 bg-dark">
          <div className="row align-items-center ">
            <div className="col-md-6 col-12">
              <h5 className="text-white">
                "SubTotal :"
                <span>$ 343</span>
              </h5>
            </div>
            <div className="col-md-5 col-12 my-3 my-md-0">
              <button className="btn1">CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
