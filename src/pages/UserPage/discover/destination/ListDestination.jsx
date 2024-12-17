import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/bundle";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";

import Watulawang from "../../../../assets/img/watulawang.jpg";
import Indrayanti from "../../../../assets/img/indrayanti.jpg";
import Parangtritis from "../../../../assets/img/parangtritis.png";
import Drini from "../../../../assets/img/drini.png";

import Banyunibo from "../../../../assets/img/Candi-Banyunibo.jpg";
import Plaosan from "../../../../assets/img/plaosan.png";
import Borobudur from "../../../../assets/img/borobudur.jpg";
import Prambanan from "../../../../assets/img/prambanan.jpg";

import BrecciaClief from "../../../../assets/img/tebing breksi.jpg";
import PangukKadiwung from "../../../../assets/img/Panguk Kediwung Hill.jpg";
import BeciciPeak from "../../../../assets/img/becici.jpg";
import Mangunan from "../../../../assets/img/kebun buah mangunan.jpg";
import { Link } from "react-router-dom";

const DestinationSlider = () => {
  const beachSlides = [
    { src: Watulawang, alt: "Watulawang", title: "Watu Lawang Beach" },
    { src: Indrayanti, alt: "Indrayanti", title: "Indrayanti Beach" },
    { src: Parangtritis, alt: "Parangtritis", title: "Parangtritis Beach" },
    { src: Drini, alt: "Drini", title: "Drini Beach" },
    { src: Watulawang, alt: "Watulawang", title: "Watu Lawang Beach" },
    { src: Indrayanti, alt: "Indrayanti", title: "Indrayanti Beach" },
    { src: Parangtritis, alt: "Parangtritis", title: "Parangtritis Beach" },
    { src: Drini, alt: "Drini", title: "Drini Beach" },
  ];

  const templeSlides = [
    { src: Banyunibo, alt: "Banyunibo", title: "Banyunibo Temple" },
    { src: Plaosan, alt: "Plaosan", title: "Plaosan Temple" },
    { src: Borobudur, alt: "Borobudur", title: "Borobudur Temple" },
    { src: Prambanan, alt: "Prambanan", title: "Prambanan" },
    { src: Banyunibo, alt: "Banyunibo", title: "Banyunibo Temple" },
    { src: Plaosan, alt: "Plaosan", title: "Plaosan Temple" },
    { src: Borobudur, alt: "Borobudur", title: "Borobudur Temple" },
    { src: Prambanan, alt: "Prambanan", title: "Prambanan" },
  ];

  const highlandSlides = [
    { src: BrecciaClief, alt: "Breccia Clief", title: "Breccia Clief" },
    { src: PangukKadiwung, alt: "Panguk Kadiwung", title: "Panguk Kadiwung" },
    { src: BeciciPeak, alt: "Becici Peak", title: "Becici Peak" },
    { src: Mangunan, alt: "Mangunan", title: "Mangunan" },
    { src: BrecciaClief, alt: "Breccia Clief", title: "Breccia Clief" },
    { src: PangukKadiwung, alt: "Panguk Kadiwung", title: "Panguk Kadiwung" },
    { src: BeciciPeak, alt: "Becici Peak", title: "Becici Peak" },
    { src: Mangunan, alt: "Mangunan", title: "Mangunan" },
  ];

  const renderSlides = (slides) => {
    return slides.map((slide, index) => (
      <SwiperSlide key={index} className="tranding-slide">
        <div className="tranding-slide-img">
          <img src={slide.src} alt={slide.alt} />
        </div>
        <div className="tranding-slide-title">
          <Link to={`/discover/detail-destination`}>
            <h5>{slide.title}</h5>
          </Link>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <section className="list">
      <div className="container">
        <h2 className="judul-list">Beach</h2>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides={true}
          spaceBetween={50}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView={`auto`}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={true}
          className="tranding-slider"
        >
          {renderSlides(beachSlides)}
        </Swiper>
      </div>

      <div className="container mt-3">
        <h2 className="judul-list">Temple</h2>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides={true}
          spaceBetween={50}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView={`auto`}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={true}
          className="tranding-slider"
        >
          {renderSlides(templeSlides)}
        </Swiper>
      </div>

      <div className="container mt-3">
        <h2 className="judul-list">High Land</h2>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          centeredSlides={true}
          spaceBetween={50}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView={`auto`}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            640: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: true },
            1024: { slidesPerView: 4, centeredSlides: true },
          }}
          navigation={true}
          className="tranding-slider"
        >
          {renderSlides(highlandSlides)}
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationSlider;
