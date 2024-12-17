import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import one from "../../../../assets/img/Kuliner/Gudeg.png";
import two from "../../../../assets/img/Kuliner/es dawet ayu.png";
import three from "../../../../assets/img/Kuliner/kopi joss.png";
import four from "../../../../assets/img/Kuliner/wajik.png";
import five from "../../../../assets/img/Kuliner/kipo.png";
import six from "../../../../assets/img/Kuliner/geplak.png";

import giftOne from "../../../../assets/img/Oleh Oleh/Tugu Jogja steamed bakpia.png";
import giftTwo from "../../../../assets/img/Oleh Oleh/Beringharjo Market.png";
import giftThree from "../../../../assets/img/Oleh Oleh/The house of raminten.png";
import giftFour from "../../../../assets/img/Oleh Oleh/bu tini.png";
import giftFive from "../../../../assets/img/Oleh Oleh/Dagelan Center.png";

import eatOne from "../../../../assets/img/restaurant/Gudeg Yu Djum.png";
import eatTwo from "../../../../assets/img/restaurant/SGPC Bu Wiryo 1959.png";
import eatThree from "../../../../assets/img/restaurant/Warung Klengan.png";
import eatFour from "../../../../assets/img/restaurant/Bu Ageng's Warung.png";
import eatFive from "../../../../assets/img/restaurant/Moerni 78.png";
import { Link } from "react-router-dom";

const FoodAndDrinkSwiper = () => {
  const sections = [
    {
      title: "Food & Drink",
      items: [
        { img: one, title: "Gudeg", text: "Gudeg is a traditional Yogyakarta dish made from young jackfruit..." },
        { img: two, title: "Dawet Ayu Ice", text: "Yogyakarta's typical ice dawet ayu is a refreshing traditional drink..." },
        { img: three, title: "Joss Coffee", text: "Joss coffee is a unique black coffee from Yogyakarta because..." },
        { img: four, title: "Wajik", text: "Wajik is a processed food made from boiled sticky rice and mixed with..." },
        { img: five, title: "Kipo", text: "Kipo is a traditional food originating from the Kotagede area, Yogyakarta..." },
        { img: six, title: "Geplak", text: "Geplak is a traditional Indonesian food originating from the Bantul area..." },
      ],
    },
    {
      title: "Find Gift Here",
      items: [
        { img: giftOne, title: "Tugu Jogja bakpia", text: "Jl. Mayor Suryotomo No.25, Ngupasan, Yogyakarta City..." },
        { img: giftTwo, title: "Beringharjo Market", text: "Jl. Margo Mulyo No.16, Ngupasan, Yogyakarta City..." },
        { img: giftThree, title: "The house of raminten", text: "Jl. Faridan M Noto No.7, Kec. Gondokusuman, Yogyakarta City..." },
        { img: giftFour, title: "Typical Jogja souvenir", text: "Jl. Mataram No. 194, Suryatmajan, Yogyakarta City..." },
        { img: giftFive, title: "Dagelan Center", text: "Jalan Malioboro Number 52-58, LG Floor, Yogyakarta City..." },
      ],
    },
  ];

  const sections2 = [
    {
      title: "Place to eat",
      items: [
        { img: eatOne, title: "Gudeg Yu Djum", text: "Jl. Sosrowijayan No.9, Gedong Tengen, Yogyakarta City..." },
        { img: eatTwo, title: "SGPC Bu Wiryo 1959", text: "Jl. Agro No.10, Kocoran, Yogyakarta City..." },
        { img: eatThree, title: "Warung Klengan", text: "Jl. Patangpuluhan No.28, Patangpuluhan, Wirobrajan, Yogyakarta..." },
        { img: eatFour, title: "Bu Ageng's Warung", text: "Jl. Kartini No. 8, Terban, Gondokusuman, Yogyakarta..." },
        { img: eatFive, title: "Moerni 78", text: "Jl. Craftsman No. 45, Tegal Panggung, Yogyakarta City..." },
      ],
    },
  ];

  return (
    <section className="list">
      <div className="container">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="judul-list">{section.title}</h2>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 4 },
              }}
              className="tranding-slider"
            >
              {section.items.map((item, idx) => (
                <SwiperSlide key={idx} className="col-md-6">
                  <div className="card mb-4">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body p-0">
                      <h5 className=" p-3">
                        <Link to={`/discover/culinary-food`} style={{ textDecoration: "none", background: "none", border: "none", color: "#212529" }}>
                          {item.title}
                        </Link>
                      </h5>
                      <p className="card-text">{item.text}</p>
                    </div>
                    <div className="card-footer text-muted">Read More</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}

        {sections2.map((section, index) => (
          <div key={index}>
            <h2 className="judul-list">{section.title}</h2>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="tranding-slider"
            >
              {section.items.map((item, idx) => (
                <SwiperSlide key={idx} className="col-md-6">
                  <div className="card mb-4">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body p-0">
                      <h5 className=" p-3">
                        <Link to={`/discover/culinary-place`} style={{ textDecoration: "none", background: "none", border: "none", color: "#212529" }}>
                          {item.title}
                        </Link>
                      </h5>
                      <p className="card-text">{item.text}</p>
                    </div>
                    <div className="card-footer text-muted">Read More</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodAndDrinkSwiper;
