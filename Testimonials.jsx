// Import Swiper React components
import user from "../images/image.png";
import user2 from "../images/image1.png";
import user3 from "../images/image2.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid testimonial ">
      <h2 className="h2_main text-center">What Our <span>Clients</span>Say!</h2>
            <p className="text-center p_main">
              Let's take a look for this great and pleasureful work What's our Clients say
            </p>
            <div className="test_main pt-4">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* ************************ */}
            <div className="row gx-0">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="testimonial_col">
                  <img src={user} alt="" />

                  <h4 className="pt-5">Jhon Due</h4>
                  <div className="stars py-2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="pt-2">
                     For instance, one customer reported
                    that their dog had health issues after consuming Freshpet
                    food1. Its essential for pet owners to carefully transition
                    their .
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>{/* ************************ */}
            <div className="row gx-0">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="testimonial_col">
                  <img src={user2} alt="" />

                  <h4 className="pt-5">james Poll</h4>
                  <div className="stars py-2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="pt-2">
                    health issues after consuming Freshpet
                    food1. Its essential for pet owners to carefully transition
                    their pets to new food and follow the instructions provided
                    by the brand.
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div></SwiperSlide>
          <SwiperSlide>{/* ************************ */}
            <div className="row gx-0">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="testimonial_col">
                  <img src={user3} alt="" />

                  <h4 className="pt-5">Carl Pixon</h4>
                  <div className="stars py-2">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p className="pt-2">
                     For instance, one customer reported
                    that their dog had health issues after consuming Freshpet
                    food1. Its essential for pet owners to carefully transition
                    their pets to new food and follow the instructions provided
                    by the brand.
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div></SwiperSlide>
        </Swiper>
        </div>
      </div>
    </>
  );
};
export default Testimonials;
