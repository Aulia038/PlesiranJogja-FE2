import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/bundle";
import "swiper/css/navigation";

import borobudur1 from "../../../../assets/img/borobudur1.jpg";
import borobudur2 from "../../../../assets/img/borobudur2.JPG";
import borobudur3 from "../../../../assets/img/borobudur3.jpeg";
import borobudur4 from "../../../../assets/img/borobudur4.png";
import borobudur5 from "../../../../assets/img/borobudur5.jpeg";
import brofe from "../../../../assets/img/borobudurinfo1.png";
import brod from "../../../../assets/img/candi-borobudur.png";

import malioboroImg from "../../../../assets/img/malioboro.jpg";
import keratonYogyakartaImg from "../../../../assets/img/Keratonyogyakarta.jpeg";
import tamanSariImg from "../../../../assets/img/tamansari.jpg";

import "../../../../styles/detail-desti.css";

const DestinationDetail = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        {/* Swiper component */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={10} // Space between slides
          slidesPerView={1} // Show one slide at a time
          loop={true} // Infinite loop of slides
          navigation={true}
          className=""
        >
          {/* Swiper slides */}
          <SwiperSlide>
            <img src={borobudur1} alt="Borobudur1" className="d-block w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={borobudur2} alt="Borobudur2" className="d-block w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={borobudur3} alt="Borobudur3" className="d-block w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={borobudur4} alt="Borobudur4" className="d-block w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={borobudur5} alt="Borobudur5" className="d-block w-100" />
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="judulinformasi mt-2">
        <div className="tittle text-center bg-secondary">
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
            <li className="tittle-item">
              <a className="tittle-link text-light">
                Information
                <i className="las la-paperclip"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="informasi">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="deskripsi col-lg-6 order-1 order-lg-1 pe-lg-2 py-5 d-flex flex-column">
              <h1 className="mb-4">Borobudur Temple</h1>
              <h2>What You'll Experience?</h2>
              <hr style={{ width: "369px", border: "1px solid #674121", marginTop: "5px" }} />
              <p>Visit the largest Buddhist temple in the world, built in the 8th century.</p>
              <ul>
                <li>Ascend to the top and be prepared to marvel at its majestic architecture with an additional fee.</li>
                <li>Admire decorative panels depicting the life of Buddha and ancient Javanese society.</li>
                <li>Explore the fascinating past by wandering around this grand temple.</li>
              </ul>
              <p>Step into history with a visit to Borobudur Temple, the largest Buddhist temple in the world!</p>
              <ul>
                <li>Rich in History: Immerse yourself in its rich history and culture as you climb the main pyramid-shaped temple.</li>
                <li>Take a closer look and admire the thousands of stone carvings portraying Buddha and the life of the Javanese people from centuries ago.</li>
                <li>Magnificent Architecture: This pyramid-shaped temple boasts a complex structure, carefully designed to awe visitors.</li>
                <li>Its grandeur and beauty are highlighted by meaningful stone carvings adorning every wall.</li>
                <li>World Heritage: Built in the 9th century during the reign of the Syailendra Dynasty of the Medang Kingdom, Borobudur Temple is a UNESCO World Heritage Site.</li>
              </ul>
              <p>Visit this internationally renowned temple to witness the unique beauty of a heritage from the past.</p>
            </div>
            <div className="deskripsi col-lg-6 order-2 order-lg-2 d-flex align-items-center mb-0">
              <img src={brofe} alt="Borobudur Informasi" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="fasilitas">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={brod} className="img-fluid" alt="Borobudur Temple" style={{ borderRadius: "0px" }} />
            </div>
            <div className="col-md-6">
              <div className="info-box text-start">
                <p className="see-box text-light">
                  <i className="las la-clock me-1"></i>
                  <span className="open-text">Open | Sat, 06:30 - 17:00</span>
                  <a href="#" className="opening-hours-link" data-bs-toggle="modal" data-bs-target="#openingHoursModal">
                    See Opening Hours
                  </a>
                </p>

                <h5 className="judul-info2">Facilities</h5>
                <div className="row facilities-box mb-1 mt-1">
                  <div className="col-6 facilities-icon">
                    <i className="las la-wifi"></i> WIFI
                  </div>
                  <div className="col-6 facilities-icon">
                    <i className="las la-pray"></i> Praying Room
                  </div>
                  <div className="col-6 facilities-icon">
                    <i className="las la-parking"></i> Parking Area
                  </div>
                  <div className="col-6 facilities-icon">
                    <i className="las la-toilet"></i> Toilet
                  </div>
                  <div className="col-6 facilities-icon">
                    <i className="las la-utensils"></i> Restaurant
                  </div>
                  <div className="col-6 facilities-icon">
                    <i className="las la-wheelchair"></i> Wheel Chair
                  </div>
                  <div className="col-6 facilities-icon">
                    <i className="las la-baby"></i> Breastfeeding room
                  </div>
                </div>
                <div className="see-box2 text-light mt-3">
                  <h5 className="judul-info">Additional Information</h5>
                  <ul>
                    <li>Every Monday, Zone 1 (Borobudur Temple Courtyard/Page) cannot be visited because it is under maintenance by the Borobudur Conservation Center.</li>
                    <li>Visitors can visit Zone 1 (Borobudur Temple Courtyard/Page) every Tuesday - Sunday at 08:30 - 15:30 WIB. It is not permitted to enter the chamber/climb the temple building.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ticket mt-2">
        <div className="container">
          <h3 className="judul-info2">Entrance Fees:</h3>
          <div className="table-responsive">
            <table className="table table-bordered text-center custom-table">
              <thead>
                <tr>
                  <th className="header-cell">Age</th>
                  <th className="header-cell">Domestic Tourist</th>
                  <th className="header-cell">International Tourist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adult</td>
                  <td>Rp.50.000,00</td>
                  <td>$ 25</td>
                </tr>
                <tr>
                  <td>Children</td>
                  <td>Rp.25.000,00</td>
                  <td>$ 15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="travel-tips mt-3">
        <div className="container">
          <div className="bg py-1">
            <h4 className="judul-info3 ms-1">Travel Tips</h4>
            <ol className="ol-li">
              <li>It's recommended to visit early in the morning or late in the afternoon for cooler weather.</li>
              <li>Wear comfortable clothing and appropriate footwear, as the temple grounds are extensive.</li>
              <li>To see the sunrise at Borobudur, visitors can purchase special tickets at nearby hotels, such as the Manohara Resort, which offers early access.</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="location mt-2">
        <div className="container">
          <h4 className="judul-info2">Location</h4>
          <p className="text-p">Jl. Badrawati, Borobudur Temple Complex, Borobudur, Borobudur District, Magelang Regency, Central Java, Indonesia</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18323.080969052895!2d110.20064903266865!3d-7.612168685879094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd34334744dc3cb!2sBorobudur%20Temple!5e0!3m2!1sen!2sid!4v1731041385553!5m2!1sen!2sid"
              width="100%"
              height="734"
              style={{ border: "0px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="otherdest mt-2 mb-5">
        <div className="container">
          <h4 className="judul-info2">Other Destinations</h4>
          <div className="row g-1">
            <div className="col-md-4">
              <div className="card h-100">
                <img src={malioboroImg} className="card-img-top h-100" alt="Malioboro" />
                <div className="p-3">
                  <h5 className="card-title-dest">Malioboro</h5>
                  <p className="card-text-dest">As the official palace of the Sultan of Yogyakarta, the Kraton holds a wealth of history and culture...</p>
                  <a href="#" className="stretched-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img src={keratonYogyakartaImg} className="card-img-top h-100" alt="Keraton Yogyakarta" />
                <div className="p-3">
                  <h5 className="card-title-dest">Keraton Yogyakarta</h5>
                  <p className="card-text-dest">As the official palace of the Sultan of Yogyakarta, the Kraton holds a wealth of history and culture...</p>
                  <a href="#" className="stretched-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img src={tamanSariImg} className="card-img-top h-100" alt="Taman Sari" />
                <div className="p-3">
                  <h5 className="card-title-dest">Taman Sari</h5>
                  <p className="card-text-dest">Taman Sari is a historic garden complex once used as a retreat for the royal family. Known for its...</p>
                  <a href="#" className="stretched-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="openingHoursModal" className="modal fade" tabIndex="-1" aria-labelledby="openingHoursModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="openingHoursModalLabel">
                Opening Hours
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-muted mb-3 text-dark">Local Time</p>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Monday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 18:00 | Last Redemption Time: 17:00</span>
              </div>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Tuesday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 18:00 | Last Redemption Time: 17:00</span>
              </div>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Wednesday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 18:00 | Last Redemption Time: 17:00</span>
              </div>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Thursday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 18:00 | Last Redemption Time: 17:00</span>
              </div>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Friday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 18:00 | Last Redemption Time: 17:00</span>
              </div>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Saturday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 20:00 | Last Redemption Time: 19:00</span>
              </div>
              <div className="day-row">
                <i className="las la-calendar"></i>
                <span className="day-name">Sunday</span>
                <i className="las la-clock"></i>
                <span className="time-info">10:00 - 20:00 | Last Redemption Time: 19:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DestinationDetail;
