import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/bundle";
import "swiper/css/navigation";

import { FaCirclePlus } from "react-icons/fa6";
import kalibiruyogya from "../../../assets/img/kalibiruyogya.jpg";
import jombangCave from "../../../assets/img/Jomblang-cave.jpg";
import timangbeach from "../../../assets/img/timangbeach.jpg";
import alun from "../../../assets/img/alun.jpg";
import borobudurfvdest from "../../../assets/img/borobudurfvdest.jpg";
import { Link } from "react-router-dom";

const FavDestination = () => {
  return (
    <section className="favorite-destination text-center mt-5">
      <div className="container">
        <h1 className="txt2-choice mb-0">Escape To Our</h1>
        <p className="txt2-pkg mt-0">Favorite Destination</p>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides={true}
          spaceBetween={-180}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={true}
          className="tranding-slider"
        >
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={kalibiruyogya} alt="Kalibiru" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Kalibiru</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={jombangCave} alt="Jomblang Cave" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Jomblang Cave</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={timangbeach} alt="Timang Beach" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Timang Beach</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={alun} alt="South Square" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>South Square</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={borobudurfvdest} alt="Borobudur Temple" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Borobudur Temple</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={kalibiruyogya} alt="Kalibiru" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Kalibiru</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={jombangCave} alt="Jomblang Cave" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Jomblang Cave</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={timangbeach} alt="Timang Beach" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Timang Beach</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={alun} alt="South Square" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>South Square</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={borobudurfvdest} alt="Borobudur Temple" />
              </div>
              <div className="tranding-slide-title">
                <Link to={`/discover/detail-destination`}>
                  <h5 style={{ textDecoration: "none" }}>Borobudur Temple</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="btn-fav-dest position-relative d-inline-block ">
        <Link to={`/discover`} className="btn btn-outline-dark mt-3 btn-favdest-margin pe-5 ">
          Explore Destination
          <FaCirclePlus className="position-absolute exp-dest-icon" />
        </Link>
      </div>
    </section>
  );
};

export default FavDestination;
