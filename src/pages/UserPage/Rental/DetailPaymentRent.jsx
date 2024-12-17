import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import ProgressBar from "../../../components/User/ProgressBar";

import { Link } from "react-router-dom";

const BannerRent = () => {
  return (
    <section className="hero-rent-payment">
      <div className="hero-text">
        <h1>RENT INFORMATION</h1>
        <p>
          <i className="fas fa-info-circle"></i> Payment Information
        </p>
      </div>
    </section>
  );
};

const Accordian = () => {
  return (
    <div className="accordion">
      <Link to={`/rental/rent-booking-2`} className="room-link">
        <div className="accordion-item">
          <button className="accordion-header">
            <span className="number">1.</span>
            <span className="title">Detail Reservation</span>
            {/* <i className="fas fa-caret-down"></i> */}
          </button>
        </div>
      </Link>
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">2.</span>
          <span className="title">Personal Data</span>
          {/* <i className="fas fa-caret-down"></i> */}
        </button>
      </div>
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">3.</span>
          <span className="title">Payment</span>
          {/* <i className="fas fa-caret-down"></i> */}
        </button>
      </div>
    </div>
  );
};

const DetailPaymentRent = () => {
  return (
    <>
      <Navbar />
      <BannerRent />
      <ProgressBar />
      <Accordian />
      <Footer />
    </>
  );
};

export default DetailPaymentRent;
