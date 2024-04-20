import img1 from "../images/Blue Buffalo Life Protection-hj2J213A.jpg";
import img2 from "../images/FELINE_GREENIES-Akwn_Xe0.png";
import img3 from "../images/Purina ONE Natural Dry Cat Food-dr3RkDkh.jpg"
import img4 from "../images/Health_Extension-BwJZJjA-.png"
import img5 from "../images/Premium_Clumping-kw3mx_Ds.png"
import img6 from "../images/Wag Dry Dog Food-KBgi_QiD.jpg"
const Products = () => {
  return (
    
    <>
    <div className="Products">
        <div className="container-fluid product_main">
            <div className="container">
            <h2 className="h2_main text-center">
                Best Selling <span>Products</span>
            </h2>
            <p className="text-center p_main">
                Our mission is to provide healthy and nutricious diet to every pet with a reasonable price 
            </p>
            <div className="row gy-4 pt-3 pt-md-5">
                {/* ********************** */}
                <div className="col-md-4">
                    <div className="products_col">
                        <img src={img1} alt="" className="img-fluid"/>
                        <div className="products_mid py-3 px-2">
                        <h4 className="">Blue Buffalo Life Protection Food</h4>
                        
                        <div className="stars ">
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                        </div>
                        <h5 className="pt-2">$70</h5>
                        </div>
                        <div className="btn1 text-center">View Cart</div>
                    </div>
                </div>
                {/* ********************** */}
                <div className="col-md-4">
                    <div className="products_col">
                        <img src={img2} alt="" className="img-fluid"/>
                        <div className="products_mid p-3">
                        <h4>Purina Natural Dry Cat Food</h4>
                        
                        <div className="stars py-1">
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                        </div>
                        <h5 className="pt-2">$110</h5>
                        </div>
                        <div className="btn1 text-center">View Cart</div>
                    </div>
                </div>
                {/* ********************** */}
                <div className="col-md-4">
                    <div className="products_col">
                        <img src={img3} alt="" className="img-fluid"/>
                        <div className="products_mid p-3">
                        <h4>Purina ONE Natural Dry Cat Food</h4>
                        
                        <div className="stars">
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                        </div>
                        <h5 className="pt-2">$90</h5>
                        </div>
                        <div className="btn1 text-center">View Cart</div>
                    </div>
                </div>
                {/* ********************** */}
                <div className="col-md-4">
                    <div className="products_col">
                        <img src={img4} alt="" className="img-fluid"/>
                        <div className="products_mid p-3">
                        <h4>Health Extension Gently Air Dried Beef Recipe</h4>
                        
                        <div className="stars">
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                        </div>
                        <h5 className="pt-2">$90</h5>
                        </div>
                        <div className="btn1 text-center">View Cart</div>
                    </div>
                </div>
                {/* ********************** */}
                <div className="col-md-4">
                    <div className="products_col">
                        <img src={img5} alt="" className="img-fluid"/>
                        <div className="products_mid p-3">
                        <h4>Premium Clumping Cat Litter - Ultra - 99.9%</h4>
                        
                        <div className="stars">
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                             <i className="fa-regular fa-star"></i>
                        </div>
                        <h5 className="pt-2">$50</h5>
                        </div>
                        <div className="btn1 text-center">View Cart</div>
                    </div>
                </div>
                {/* ********************** */}
                <div className="col-md-4">
                    <div className="products_col">
                        <img src={img6} alt="" className="img-fluid"/>
                        <div className="products_mid p-3">
                        <h4>Wag Digestive and Dog Food Recipie  </h4>
                        
                        <div className="stars">
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i>
                        </div>
                        <h5 className="pt-2">$90</h5>
                        </div>
                        <div className="btn1 text-center">View Cart</div>
                    </div>
                </div>
                {/* ********************** */}
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products;