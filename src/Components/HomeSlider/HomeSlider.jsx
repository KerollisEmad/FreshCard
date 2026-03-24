import homeImg from "../../assets/home-slider-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomeSlider() {
  return (
    <>
      <Swiper
      modules={[Pagination,Navigation]}
      slidesPerView={1}
      loop={true}
      pagination={{clickable:true}}
      navigation
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeImg}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay bg-gradient-to-r from-primary-600/80 to-primary-600/30">
              <div className="container p-10 md:p-24 text-white space-y-5">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold sm:font-black ">
                  Fresh Products in Website <br />
                  delievered to You Door
                </h2>
                <p className="text-lg">Get 20% off for your First Order</p>
                <div className="space-x-4">
                  <button className="btn sm:py-3.5 sm:px-5 text-[yellowgreen] bg-white border border-white font-medium hover:bg-transparent hover:text-white transition-colors duration-200">Shop Now</button>
                  <button className="btn sm:py-3.5 sm:px-5 text-white bg-transparent border border-white font-medium hover:bg-white hover:text-[yellowgreen] transition-colors duration-200">View Deals</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeImg}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay bg-gradient-to-r from-primary-600/80 to-primary-600/30">
              <div className="container p-10 md:p-24 text-white space-y-5">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold sm:font-black ">
                  Fresh Products in Website <br />
                  delievered to You Door
                </h2>
                <p className="text-lg">Get 20% off for your First Order</p>
                <div className="space-x-4">
                  <button className="btn sm:py-3.5 sm:px-5 text-[yellowgreen] bg-white border border-white font-medium hover:bg-transparent hover:text-white transition-colors duration-200">Shop Now</button>
                  <button className="btn sm:py-3.5 sm:px-5 text-white bg-transparent border border-white font-medium hover:bg-white hover:text-[yellowgreen] transition-colors duration-200">View Deals</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeImg}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay bg-gradient-to-r from-primary-600/80 to-primary-600/30">
              <div className="container p-10 md:p-24 text-white space-y-5">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold sm:font-black ">
                  Fresh Products in Website <br />
                  delievered to You Door
                </h2>
                <p className="text-lg">Get 20% off for your First Order</p>
                <div className="space-x-4">
                  <button className="btn sm:py-3.5 sm:px-5 text-[yellowgreen] bg-white border border-white font-medium hover:bg-transparent hover:text-white transition-colors duration-200">Shop Now</button>
                  <button className="btn sm:py-3.5 sm:px-5 text-white bg-transparent border border-white font-medium hover:bg-white hover:text-[yellowgreen] transition-colors duration-200">View Deals</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
