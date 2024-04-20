import img1 from "../images/dog-bg-ZFqMikDp.png";
import wave from "../images/layer-1MnSLsjs.png";
const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="container-fluid gx-0 Hero_main px-5 ">
          <div className="row gx-0 align-items-center mx-3">
            <div className="col-md-6">
              <div className="hero_coll">
                <h3>We care For Your Pet</h3>
                <h1>
                  Best <span>Pet Products</span> And Toys
                </h1>
                <p>
                  At Pet Delight, we believe that every pet deserves the best.
                  Thats why were committed to providing high-quality,
                  nutritious, and delicious food for your furry friends. Our
                  products are carefully formulated by veterinary nutritionists
                  to ensure they meet the specific dietary needs of all pets,
                  regardless of breed, age, or size. We offer a wide range of
                  products, from dry kibble to wet food, treats, and dietary
                  supplements. All our products are made with natural
                  ingredients and are free from artificialpreservatives and
                  colors. We source our ingredients responsibly, ensuring they
                  are sustainable and ethically produced.
                </p>
                <button className="btn1">Shop Now</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero_coll2 text-end">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********************************************** */}
      <div className="wave">
        <img src={wave} alt="" className="img-fluid" />
      </div>
      {/* ********************************************** */}
    </>
  );
};

export default Hero;