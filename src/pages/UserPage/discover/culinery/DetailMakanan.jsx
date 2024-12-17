import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";

import one from "../../../../assets/img/upacara-sekaten.png";
import second from "../../../../assets/img/gudeg.jpg";

import gudeg from "../../../../assets/img/Kuliner/Gudeg.png";
import two from "../../../../assets/img/Kuliner/es dawet ayu.png";
import three from "../../../../assets/img/Kuliner/kopi joss.png";
import four from "../../../../assets/img/Kuliner/wajik.png";
import five from "../../../../assets/img/Kuliner/kipo.png";
import six from "../../../../assets/img/Kuliner/geplak.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "../../../../styles/tempat.css";
import "../../../../styles/review.css";

const DetailMakanan = () => {
  const sections = [
    {
      title: "Food & Drink",
      items: [
        { img: gudeg, title: "Gudeg", text: "Gudeg is a traditional Yogyakarta dish made from young jackfruit..." },
        { img: two, title: "Dawet Ayu Ice", text: "Yogyakarta's typical ice dawet ayu is a refreshing traditional drink..." },
        { img: three, title: "Joss Coffee", text: "Joss coffee is a unique black coffee from Yogyakarta because..." },
        { img: four, title: "Wajik", text: "Wajik is a processed food made from boiled sticky rice and mixed with..." },
        { img: five, title: "Kipo", text: "Kipo is a traditional food originating from the Kotagede area, Yogyakarta..." },
        { img: six, title: "Geplak", text: "Geplak is a traditional Indonesian food originating from the Bantul area..." },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={one} alt="Upacara" className="d-block" />
            </div>
          </div>
        </div>
      </div>

      <section className="location mt-2">
        <div className="container">
          <h4 className="judul-info" style={{ textAlign: "center" }}>
            About Gudeg
          </h4>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="deskripsi col-lg-4 order-1 order-lg-1" style={{ paddingLeft: "0px" }}>
            <img src={second} alt="Borobudur Informasi" className="img-fluid" />
          </div>
          <div className="deskripsi col-lg-8 order-2 order-lg-2 pe-lg-2 py-5 d-flex flex-column">
            <p>
              Yogyakarta, known as a city of culture and education, also has a strong reputation in terms of culinary delights. One of the culinary icons that you must try when visiting this city is gudeg. This dish does not offer a
              delicious taste, but it also holds deep cultural and historical value. Gudeg is a dish made from young jackfruit cooked in coconut milk with various spices, such as shallots, garlic, galangal and bay leaves. The slow and long
              cooking process produces a soft texture and rich taste. Visiting Yogyakarta without tasting gudeg is something to miss. With a combination of rich flavors, deep cultural values, and a unique culinary experience, gudeg is one
              dish that every tourist must try.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="judul-list">Other Food & Drink </h2>

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
                        <Link to={`/detail-tempat`} style={{ textDecoration: "none", background: "none", border: "none", color: "#212529" }}>
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
      <Footer />
    </>
  );
};

export default DetailMakanan;
