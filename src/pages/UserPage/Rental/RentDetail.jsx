import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";

import mainImage from "../../../assets/img/RENTAL/depan.png";
import thumbnail1 from "../../../assets/img/RENTAL/depan.png";
import thumbnail2 from "../../../assets/img/RENTAL/pkiri.png";
import thumbnail3 from "../../../assets/img/RENTAL/pbelakang.png";
import thumbnail4 from "../../../assets/img/RENTAL/pinter.png";
import thumbnail5 from "../../../assets/img/RENTAL/pinter2.png";
import "../../../styles/rent-detail.css";
import { Link } from "react-router-dom";

const RentDetail = () => {
  return (
    <>
      <Navbar />
      <section className="rentinfo" style={{ marginTop: "150px" }}>
        <div className="container my-5">
          <div className="row">
            {/* Left Section (Images, Info, Pickup Location) */}
            <div className="col-md-8">
              {/* Car Images */}
              <div className="car-images mb-4">
                <img src={mainImage} className="img-fluid main-image h-auto" alt="Main Car Image" />
                <div className="thumbnail-images mt-2 d-flex justify-content-between">
                  <img src={thumbnail1} className="img-thumbnail me-2" alt="Thumbnail 1" />
                  <img src={thumbnail2} className="img-thumbnail me-2" alt="Thumbnail 2" />
                  <img src={thumbnail3} className="img-thumbnail me-2" alt="Thumbnail 3" />
                  <img src={thumbnail4} className="img-thumbnail me-2" alt="Thumbnail 4" />
                  <img src={thumbnail5} className="img-thumbnail" alt="Thumbnail 5" />
                </div>
              </div>

              {/* Specifications and Important Info */}
              <div className="specifications p-3 mb-3">
                <div className="title-box">Specification</div>
                <div className="row">
                  <div className="col-5 d-flex align-items-center gap-2">
                    <i className="bi bi-gear-fill"></i> Automatic
                  </div>
                  <div className="col-5 d-flex align-items-center gap-2">
                    <i className="bi bi-people-fill"></i> 4 Orang
                  </div>
                  <div className="col-2 d-flex align-items-center gap-2">
                    <i className="bi bi-calendar-fill"></i> 2023
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-5 d-flex align-items-center gap-2">
                    <i className="bi bi-speedometer2"></i> 4000 cc
                  </div>
                  <div className="col-7 d-flex align-items-center gap-2">
                    <i className="bi bi-fuel-pump-fill"></i> Gasoline
                  </div>
                </div>
              </div>

              {/* Important Info Section */}
              <div className="important-info p-3 mb-3">
                <div className="title-box">Important Info</div>
                <p>
                  <strong>After You Book:</strong>
                </p>
                <ul>
                  <li>Rental provider will contact you via WhatsApp to verify documents.</li>
                </ul>
                <p>
                  <strong>During Pick-up:</strong>
                </p>
                <ul>
                  <li>Bring ID card, driver’s license, and required documents.</li>
                  <li>Check car condition with staff, sign rental agreement.</li>
                </ul>
                <p>
                  <strong>Usage:</strong>
                </p>
                <ul>
                  <li>No smoking, pets, or unauthorized transfers.</li>
                </ul>
                <p>
                  <strong>Return:</strong>
                </p>
                <ul>
                  <li>Return in the same condition as picked up, with a full tank.</li>
                </ul>
                <p>
                  <strong>Overtime:</strong>
                </p>
                <ul>
                  <li>Overtime fee of Rp50,000 per hour; more than 3 hours equals full day rental.</li>
                </ul>
              </div>

              {/* Pick-Up Location Section */}
              <div className="pickup-location p-3 mb-4">
                <div className="title-box">Pick-Up Location</div>
                <div className="pickup-option form-check mt-2">
                  <input className="form-check-input ms-1" type="radio" name="pickup" id="rentOffice" defaultChecked />
                  <label className="form-check-label" htmlFor="rentOffice">
                    Rent Office
                  </label>
                </div>
                <div className="map-container card mt-3">
                  <div className="card-body p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.150983660013!2d110.36590257358016!3d-7.773809977115957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58485d4d2de1%3A0x59986450d810f006!2sHotel%20Tentrem%20Yogyakarta!5e0!3m2!1sen!2sid!4v1730739001900!5m2!1sen!2sid"
                      className="w-100"
                      style={{ height: "300px", border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>

                <div className="pickup-option form-check mt-3">
                  <input className="form-check-input ms-1" type="radio" name="pickup" id="other" />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
            </div>

            {/* Right Section (Booking) */}
            <div className="col-md-4">
              <div className="booking-card p-4">
                <h5>From:</h5>
                <input type="date" className="form-control mb-2" />
                <h5>To:</h5>
                <input type="date" className="form-control mb-3" />
                <h6 className="sub-total text-center">Sub Total</h6>
                <h4 className="price text-center">120.000</h4>
                <Link className="btn btn-warning w-100 mt-2" to={`/rental/rent-booking`}>
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RentDetail;
