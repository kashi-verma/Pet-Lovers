import img1 from "../images/dog-V-PkwL3c.jpg";
import img2 from "../images/cat-NdYAGpYY.jpg";
import img3 from "../images/fish-A3JtZiL5.jpg";
import img4 from "../images/bird-eaVGVCYQ.jpg";


const Category = () => {
  return (
    <>
    <div className="category">
        <div className="container-fluid category_main">
            <h2 className="h2_main text-center">Top <span>Categories</span></h2>
            <p className="text-center p_main">Pet Lovers is a popular online pet store in India that offers a wide range of pet supplies and products.
They provide essentials for cats, dogs, and other
 small animals.Categories include pet food,
  toys, grooming products, and more.</p>
            <div className="row align-items-center">
                <div className="col-md-3">
                    <div className="category_col">
                        <img src={img1} alt="" className="img-fluid" />
                        <h3>Dog</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category_col">
                        <img src={img2} alt=""className="img-fluid" />
                        <h3>Cat</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category_col">
                        <img src={img3} alt=""className="img-fluid" />
                        <h3>Fish</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="category_col">
                        <img src={img4}alt="" className="img-fluid"/>
                        <h3>Parrot</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Category;